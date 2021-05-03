package ru.nlmk.problemsolvingboard.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import ru.nlmk.problemsolvingboard.model.Area;
import ru.nlmk.problemsolvingboard.model.Board;
import ru.nlmk.problemsolvingboard.model.FaResponsible;
import ru.nlmk.problemsolvingboard.model.Leader;
import ru.nlmk.problemsolvingboard.model.Position;
import ru.nlmk.problemsolvingboard.model.ResolutionStatus;
import ru.nlmk.problemsolvingboard.model.Responsible;
import ru.nlmk.problemsolvingboard.model.RiskLevel;
import ru.nlmk.problemsolvingboard.model.SolvingLevel;
import ru.nlmk.problemsolvingboard.model.User;

@Configuration
public class RepositoryConfig implements RepositoryRestConfigurer {
    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {
        config.exposeIdsFor(
            Area.class,
            Board.class,
            FaResponsible.class,
            Leader.class,
            Position.class,
            ResolutionStatus.class,
            Responsible.class,
            RiskLevel.class,
            SolvingLevel.class,
            User.class
        );
    }
}
