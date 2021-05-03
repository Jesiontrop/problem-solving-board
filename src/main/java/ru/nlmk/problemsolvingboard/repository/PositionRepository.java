package ru.nlmk.problemsolvingboard.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.nlmk.problemsolvingboard.model.Position;

public interface PositionRepository extends JpaRepository<Position, Long> {
}
