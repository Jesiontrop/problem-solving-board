package andrey.jesiontrop.problemsolvingboard.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import andrey.jesiontrop.problemsolvingboard.model.Informant;

public interface InformantRepository extends JpaRepository<Informant, Long> {
}
