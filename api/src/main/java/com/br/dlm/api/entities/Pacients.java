package com.append.backend.entities;



import jakarta.persistence.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;


import java.io.Serializable;
import java.util.Objects;

@Entity
@Table(name = "Pacients")
public class Pacients implements Serializable {
    
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String name;
    private Date birthdate;
    private String gender;

    public Pacients() {
    }

    public Pacients(String name, Date birthdate, String gender) {
        this.name = name;
        this.birthdate = birthdate;
        this.gender = gender;
    }

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getBirthdate() {
        return birthdate;
    }

    public void setBirthdate(Date birthdate) {
        this.birthdate = birthdate;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        House house = (House) o;
        return id == house.id;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
