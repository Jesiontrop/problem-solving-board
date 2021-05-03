package ru.nlmk.problemsolvingboard.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import ru.nlmk.problemsolvingboard.model.ResolutionStatus;

public interface ResolutionStatusRepository extends JpaRepository<ResolutionStatus, Long> {
}
