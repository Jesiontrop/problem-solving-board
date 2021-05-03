package ru.nlmk.problemsolvingboard.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import ru.nlmk.problemsolvingboard.model.Responsible;

public interface ResponsibleRepository extends JpaRepository<Responsible, Long> {
}
