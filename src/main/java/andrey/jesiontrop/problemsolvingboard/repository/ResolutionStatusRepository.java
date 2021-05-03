package andrey.jesiontrop.problemsolvingboard.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import andrey.jesiontrop.problemsolvingboard.model.ResolutionStatus;

public interface ResolutionStatusRepository extends JpaRepository<ResolutionStatus, Long> {
}
