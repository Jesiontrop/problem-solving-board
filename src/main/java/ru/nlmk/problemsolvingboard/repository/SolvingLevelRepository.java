package ru.nlmk.problemsolvingboard.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import ru.nlmk.problemsolvingboard.model.SolvingLevel;

public interface SolvingLevelRepository extends JpaRepository<SolvingLevel, Long> {
}
