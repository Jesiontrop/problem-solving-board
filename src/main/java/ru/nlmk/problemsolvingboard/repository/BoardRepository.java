package ru.nlmk.problemsolvingboard.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.nlmk.problemsolvingboard.model.Board;

public interface BoardRepository extends JpaRepository<Board, Long> {
}
