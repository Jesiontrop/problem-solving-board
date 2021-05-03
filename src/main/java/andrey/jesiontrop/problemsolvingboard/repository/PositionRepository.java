package andrey.jesiontrop.problemsolvingboard.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import andrey.jesiontrop.problemsolvingboard.model.Position;

public interface PositionRepository extends JpaRepository<Position, Long> {
}
