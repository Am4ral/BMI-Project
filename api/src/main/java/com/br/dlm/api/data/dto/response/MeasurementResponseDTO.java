package com.br.dlm.api.data.dto.response;

import com.br.dlm.api.data.entity.Measurement;

public record MeasurementResponseDTO(

        Long idMeasurement,

        Double height,

        Double weight,

        Double bmi,

        PacientResponseDTO pacientResponseDTO
) {
    public MeasurementResponseDTO(Measurement measurement) {
        this(
                measurement.getIdMeasurement(),
                measurement.getHeight(),
                measurement.getWeight(),
                measurement.getBmi(),
                new PacientResponseDTO(measurement.getPacient())
        );
    }
}
