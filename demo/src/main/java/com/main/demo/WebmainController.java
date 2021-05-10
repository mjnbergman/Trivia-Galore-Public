package com.main.demo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * 
 * @author Maiko Bergman
 * Handler for the index page. For now does nothing special.
 *
 */
@Controller
public class WebmainController {
    @RequestMapping(value = "/")
    public String index() {
        return "index";
    }
	
}
