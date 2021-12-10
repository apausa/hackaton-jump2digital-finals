package com.grupo4.nuwecashrest.repos;

import com.grupo4.nuwecashrest.classes.Month;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface MonthRepository extends CrudRepository<Month, UUID> {
}
