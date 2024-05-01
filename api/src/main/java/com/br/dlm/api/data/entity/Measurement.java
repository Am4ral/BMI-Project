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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_measurement")
    private Long idMeasurement;

    @Column(name = "height")
    private double height;

    @Column(name = "weight")
    private double weight;

    @Column(name = "bmi")
    private double bmi;

    @Column(name = "measurement_date")
    private Date measurementDate;

    @ManyToOne()
    @JoinColumn(name = "id_pacient")
    private Pacient pacient;

    @Builder
    public Measurement(MeasurementRequestDTO measurementRequestDTO){
        this.height = measurementRequestDTO.height();
        this.weight = measurementRequestDTO.weight();
        this.bmi = calculateBmi();
        this.measurementDate = new Date();
        this.pacient = measurementRequestDTO.pacient();
    }

    public double calculateBmi(){
        return this.weight / (this.height * this.height);
    }
}
