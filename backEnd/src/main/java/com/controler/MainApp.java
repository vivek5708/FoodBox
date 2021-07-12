package com.controler;


import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.model.FoodItem;

import com.service.FoodBoxService;




@Controller
@RequestMapping("/mainapp")
@CrossOrigin(origins = "http://localhost:4200")
public class MainApp {
	
	@Autowired(required=true)
	private FoodBoxService service;
	
	
	@GetMapping("/fooditem")
	@ResponseBody
	public ArrayList<FoodItem> getFoodItemFromService() {
		return service.fetchFoodItem();
	}
	
}
