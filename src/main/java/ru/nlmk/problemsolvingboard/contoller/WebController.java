package ru.nlmk.problemsolvingboard.contoller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import ru.nlmk.problemsolvingboard.model.Area;
import ru.nlmk.problemsolvingboard.repository.AreaRepository;

@Controller
@RequestMapping("")
public class WebController {
    @GetMapping
    public String home() {
        return "index";
    }
}
