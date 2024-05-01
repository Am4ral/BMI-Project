package com.br.dlm.api.service;

import com.br.dlm.api.data.dto.request.MeasurementRequestDTO;
import com.br.dlm.api.data.dto.response.MeasurementResponseDTO;
import com.br.dlm.api.data.entity.Measurement;
import com.br.dlm.api.exceptions.general.EntityNotFoundException;
import com.br.dlm.api.repository.MeasurementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class MeasurementService {

    @Autowired
    private MeasurementRepository measurementRepository;

    public MeasurementResponseDTO findById(Long id) {
        return new MeasurementResponseDTO(getMeasurementById(id));
    }

    public List<MeasurementResponseDTO> getAllMeasurements() {
        return measurementRepository.findAll().stream().map(MeasurementResponseDTO::new).collect(Collectors.toList());
    }

    public MeasurementResponseDTO createMeasurement(MeasurementRequestDTO measurementRequestDTO) {
        Measurement measurement = new Measurement(measurementRequestDTO);
        return new MeasurementResponseDTO(measurementRepository.save(measurement));
    }

    public MeasurementResponseDTO updateMeasurement(Long id, MeasurementRequestDTO measurementRequestDTO) {
        Measurement updatedMeasurement = getMeasurementById(id);
        updatedMeasurement.setHeight(measurementRequestDTO.height());
        updatedMeasurement.setWeight(measurementRequestDTO.weight());
        updatedMeasurement.setBmi(updatedMeasurement.calculateBmi());
        updatedMeasurement.setPacient(measurementRequestDTO.pacient());

        return new MeasurementResponseDTO(measurementRepository.save(updatedMeasurement));
    }

    public String deleteMeasurement(Long id) {
        measurementRepository.deleteById(id);
        return "Measurement with id " + id + " deleted successfully";
    }

    private Measurement getMeasurementById(Long id) {
        return measurementRepository.findById(id).orElseThrow(()-> new EntityNotFoundException(id));
    }
}
