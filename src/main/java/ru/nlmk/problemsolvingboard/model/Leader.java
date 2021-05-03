package ru.nlmk.problemsolvingboard.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
@Entity
@Table(name = "leaders")
public class Leader {

    @Id
    @SequenceGenerator(name = "leaders_id_seq",
        sequenceName = "leaders_id_seq",
        allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE,
                    generator = "leaders_id_seq")
    private Long id;

    private String fullname;
    private String email;
}
