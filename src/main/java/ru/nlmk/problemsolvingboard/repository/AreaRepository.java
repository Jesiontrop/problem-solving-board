package ru.nlmk.problemsolvingboard.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ru.nlmk.problemsolvingboard.model.Area;

public interface AreaRepository extends JpaRepository<Area, Long> {
}
