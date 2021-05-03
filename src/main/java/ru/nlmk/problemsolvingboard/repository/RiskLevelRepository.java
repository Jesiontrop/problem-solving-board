package ru.nlmk.problemsolvingboard.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import ru.nlmk.problemsolvingboard.model.RiskLevel;

public interface RiskLevelRepository extends JpaRepository<RiskLevel, Long> {
}
