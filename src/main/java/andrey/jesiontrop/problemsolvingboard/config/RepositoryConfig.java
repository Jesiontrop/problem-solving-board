package andrey.jesiontrop.problemsolvingboard.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import andrey.jesiontrop.problemsolvingboard.model.FmResponsible;
import andrey.jesiontrop.problemsolvingboard.model.Leader;
import andrey.jesiontrop.problemsolvingboard.model.Position;
import andrey.jesiontrop.problemsolvingboard.model.ResolutionStatus;
import andrey.jesiontrop.problemsolvingboard.model.Responsible;
import andrey.jesiontrop.problemsolvingboard.model.RiskLevel;
import andrey.jesiontrop.problemsolvingboard.model.SolvingLevel;
import andrey.jesiontrop.problemsolvingboard.model.User;
import andrey.jesiontrop.problemsolvingboard.model.Area;
import andrey.jesiontrop.problemsolvingboard.model.Board;
import andrey.jesiontrop.problemsolvingboard.model.Informant;
import andrey.jesiontrop.problemsolvingboard.model.ViewBoard;

@Configuration
public class RepositoryConfig implements RepositoryRestConfigurer {
    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {
        config.exposeIdsFor(
                Area.class,
                Board.class,
                FmResponsible.class,
                Leader.class,
                Position.class,
                ResolutionStatus.class,
                Responsible.class,
                RiskLevel.class,
                SolvingLevel.class,
                User.class,
                Informant.class,
                ViewBoard.class
        );
    }
}
