package andrey.jesiontrop.problemsolvingboard.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import andrey.jesiontrop.problemsolvingboard.model.RiskLevel;

public interface RiskLevelRepository extends JpaRepository<RiskLevel, Long> {
}
