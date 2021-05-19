package andrey.jesiontrop.problemsolvingboard.repository;

import andrey.jesiontrop.problemsolvingboard.model.ViewBoard;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ViewBoardRepository extends JpaRepository<ViewBoard, Long> {
}
