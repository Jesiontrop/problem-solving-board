package andrey.jesiontrop.problemsolvingboard.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import andrey.jesiontrop.problemsolvingboard.model.SolvingLevel;

public interface SolvingLevelRepository extends JpaRepository<SolvingLevel, Long> {
}
