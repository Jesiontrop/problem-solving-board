package andrey.jesiontrop.problemsolvingboard.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import andrey.jesiontrop.problemsolvingboard.model.Leader;

public interface LeaderRepository extends JpaRepository<Leader, Long> {
}
