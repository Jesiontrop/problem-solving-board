package ru.nlmk.problemsolvingboard.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
@Table(name = "solving_levels")
public class SolvingLevel {

    @Id
    @SequenceGenerator(name = "solving_levels_id_seq",
            sequenceName = "solving_levels_id_seq",
            allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE,
                    generator = "solving_levels_id_seq")
    private Long id;

    private String name;
}
