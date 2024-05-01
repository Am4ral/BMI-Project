package com.br.dlm.api.service;

import com.br.dlm.api.data.dto.response.MeasurementResponseDTO;
import com.br.dlm.api.data.entity.Measurement;
import com.br.dlm.api.exceptions.general.EntityNotFoundException;
import com.br.dlm.api.repository.MeasurementRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class MeasurementService {

    private MeasurementRepository measurementRepository;

    private MeasurementResponseDTO findById(Long id) {
        return new MeasurementResponseDTO(getMeasurementById(id));
    }

    private List<MeasurementResponseDTO> getAllMeasurements() {
        return measurementRepository.findAll().stream().map(MeasurementResponseDTO::new).collect(Collectors.toList());
    }

    private Measurement getMeasurementById(Long id) {
        return measurementRepository.findById(id).orElseThrow(()-> new EntityNotFoundException(id));
    }
}
