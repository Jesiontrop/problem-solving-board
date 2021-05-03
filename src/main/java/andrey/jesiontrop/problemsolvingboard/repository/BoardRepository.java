package andrey.jesiontrop.problemsolvingboard.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import andrey.jesiontrop.problemsolvingboard.model.Board;

public interface BoardRepository extends JpaRepository<Board, Long> {
}
