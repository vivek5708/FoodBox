package com.service;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

import org.springframework.stereotype.Service;

import com.model.FoodItem;


@Service
public class FoodBoxService {
	
	
	public ArrayList<FoodItem> fetchFoodItem() {
		Connection conn = null;
		Statement stmt = null;
		//FoodItem rObj = new FoodItem();
		ArrayList<FoodItem> foodItemsList = new ArrayList<FoodItem>();
		
		try {
			conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/simplilearn","root","");

			stmt = conn.createStatement();

			String sql = "SELECT * FROM fooditem";
			ResultSet rs = stmt.executeQuery(sql);
			while(rs.next()){
				int food_id =  rs.getInt("food_id");
				String dishName = rs.getString("dish_name");
				String dishUrl = rs.getString("dish_url");
				String dishPrice = rs.getString("dish_price");
				String category = rs.getString("dish_category");
				

				FoodItem rObj = new FoodItem(food_id, dishName, dishUrl, dishPrice, category);
				foodItemsList.add(rObj);
			}
		}
		catch(SQLException se){
			//Handle errors for JDBC
			se.printStackTrace();
		}catch(Exception e){
			//Handle errors for Class.forName
			e.printStackTrace();
		}finally{
			//finally block used to close resources
			try{
				if(stmt!=null)
					conn.close();
			}catch(SQLException se){
			}// do nothing
			try{
				if(conn!=null)
					conn.close();
			}catch(SQLException se){
				se.printStackTrace();
			}//end finally try
		}
		
		return foodItemsList;
	}
}
