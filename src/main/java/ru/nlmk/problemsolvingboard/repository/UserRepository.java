package ru.nlmk.problemsolvingboard.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import ru.nlmk.problemsolvingboard.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
}
