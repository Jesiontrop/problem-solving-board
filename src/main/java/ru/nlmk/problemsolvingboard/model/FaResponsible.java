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
@Table(name = "fa_responsible")
public class FaResponsible {

    @Id
    @SequenceGenerator(name = "fa_responsible_id_seq",
            sequenceName = "fa_responsible_id_seq",
            allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE,
                    generator = "fa_responsible_id_seq")
    private Long id;

    private String name;
}
