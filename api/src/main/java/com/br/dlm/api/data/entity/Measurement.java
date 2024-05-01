package com.br.dlm.api.data.entity;

import com.br.dlm.api.data.dto.request.MeasurementRequestDTO;
import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "measurement")
public class Measurement {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_measurement")
    private Long idMeasurement;

    @Column(name = "height")
    private Double height;

    @Column(name = "weight")
    private Double weight;

    @Column(name = "bmi")
    private Double bmi;

    @Column(name = "measurementDate")
    private Date measurementDate;

    @ManyToOne()
    @JoinColumn(name = "id_pacient")
    private Pacient pacient;

    @Builder
    public Measurement(MeasurementRequestDTO measurementRequestDTO){
        this.height = measurementRequestDTO.height();
        this.weight = measurementRequestDTO.weight();
        this.bmi = measurementRequestDTO.bmi();
        this.measurementDate = new Date();
        this.pacient = measurementRequestDTO.pacient();
    }
}
