package andrey.jesiontrop.problemsolvingboard.config;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import andrey.jesiontrop.problemsolvingboard.model.User;

@Controller
public class WebController {

    @GetMapping("/")
    public String home(Model model, @AuthenticationPrincipal User user) {
        boolean isAuth = false;
        if (user != null) {
            model.addAttribute("user", user);
            isAuth = true;
        }
        model.addAttribute("isAuth", isAuth);

        return "index";
    }

    @GetMapping("/add")
    public String add(Model model, @AuthenticationPrincipal User user) {
        boolean isAuth = false;
        if (user != null) {
            model.addAttribute("user", user);
            isAuth = true;
        }
        model.addAttribute("isAuth", isAuth);

        return "index";
    }

    @GetMapping("/board")
    public String board(Model model, @AuthenticationPrincipal User user) {
        boolean isAuth = false;
        if (user != null) {
            model.addAttribute("user", user);
            isAuth = true;
        }
        model.addAttribute("isAuth", isAuth);

        return "index";
    }

    @GetMapping("/information/{id}")
    public String information(@PathVariable String id, Model model, @AuthenticationPrincipal User user) {
        boolean isAuth = false;
        if (user != null) {
            model.addAttribute("user", user);
            isAuth = true;
        }
        model.addAttribute("isAuth", isAuth);

        return "index";
    }

    @GetMapping("/profile")
    public String profile( Model model, @AuthenticationPrincipal User user) {
        boolean isAuth = false;
        if (user != null) {
            model.addAttribute("user", user);
            isAuth = true;
        }
        model.addAttribute("isAuth", isAuth);

        return "index";
    }
}
