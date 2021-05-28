package andrey.jesiontrop.problemsolvingboard.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Immutable;

import javax.persistence.*;
import java.util.Date;

@Data
@NoArgsConstructor
@Entity
@Immutable
@Table(name = "v_board")
public class ViewBoard {

    @Id
    private Long id;

    private Date registrationDate;

    @ManyToOne(targetEntity = Area.class)
    @JoinColumn(name = "area_id")
    private Area area;
    private String areaName;

    @Lob
    private String problem;

    @ManyToOne(targetEntity = RiskLevel.class)
    @JoinColumn(name = "risk_level_id")
    private RiskLevel riskLevel;
    private String riskLevelName;

    @Lob
    private String proposedSolution;

    @ManyToOne(targetEntity = Responsible.class)
    @JoinColumn(name = "responsible_id")
    private Responsible responsible;
    private String responsibleName;
    private String responsibleEmail;

    private Date plannedDate;
    private Date actualDate;

    @ManyToOne(targetEntity = SolvingLevel.class)
    @JoinColumn(name = "solving_level_id")
    private SolvingLevel solvingLevel;
    private String solvingLevelName;

    @ManyToOne(targetEntity = ResolutionStatus.class)
    @JoinColumn(name = "resolution_status_id")
    private ResolutionStatus resolutionStatus;
    private String resolutionStatusName;


    @ManyToOne(targetEntity = FmResponsible.class)
    @JoinColumn(name = "fm_responsible_id")
    private FmResponsible fmResponsible;
    private String fmResponsibleName;

    @Lob
    private String reasonForRefusal;

    @ManyToOne(targetEntity = Informant.class)
    @JoinColumn(name = "informant_id")
    private Informant informant;
    private String informantFullname;
    private String informantPosition;
}