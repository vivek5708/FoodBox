package com.model;

public class FoodItem {
	
	private int food_id;
	private String dishName;
	private String dishUrl;
	private String dishPrice;
	private String category; /* veg or non-veg*/
	
	
	public int getFood_id() {
		return food_id;
	}
	public void setFood_id(int food_id) {
		this.food_id = food_id;
	}
	public String getDishName() {
		return dishName;
	}
	public void setDishName(String dishName) {
		this.dishName = dishName;
	}
	public String getDishUrl() {
		return dishUrl;
	}
	public void setDishUrl(String dishUrl) {
		this.dishUrl = dishUrl;
	}
	public String getDishPrice() {
		return dishPrice;
	}
	public void setDishPrice(String dishPrice) {
		this.dishPrice = dishPrice;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public FoodItem(int food_id, String dishName, String dishUrl, String dishPrice, String category) {
		super();
		this.food_id = food_id;
		this.dishName = dishName;
		this.dishUrl = dishUrl;
		this.dishPrice = dishPrice;
		this.category = category;
	}
	public FoodItem() {
		super();
		// TODO Auto-generated constructor stub
	}

}
