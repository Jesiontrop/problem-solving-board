package andrey.jesiontrop.problemsolvingboard.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import andrey.jesiontrop.problemsolvingboard.model.Responsible;
import andrey.jesiontrop.problemsolvingboard.model.User;

public interface ResponsibleRepository extends JpaRepository<Responsible, Long> {

    Responsible findByUserId(@Param("userId") Long userId);
}
