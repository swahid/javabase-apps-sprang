package org.javabase.apps.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Handles requests for the application home page.
 */
@Controller
public class HomeController2 {
	
	private static final Logger log = LoggerFactory.getLogger(HomeController2.class);
	
	
	@RequestMapping(value = { "/home2" }, method = RequestMethod.GET)
	public String home() {
		log.info("Home 2 call");
		return "home2";
	}
	
}
