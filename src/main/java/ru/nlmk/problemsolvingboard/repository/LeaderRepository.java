package ru.nlmk.problemsolvingboard.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.nlmk.problemsolvingboard.model.Leader;

public interface LeaderRepository extends JpaRepository<Leader, Long> {
}
