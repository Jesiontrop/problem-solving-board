package andrey.jesiontrop.problemsolvingboard.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/").setViewName("index");
        registry.addViewController("/add").setViewName("index");
        registry.addViewController("/board").setViewName("index");
        registry.addViewController("/information").setViewName("index");
    }
}
