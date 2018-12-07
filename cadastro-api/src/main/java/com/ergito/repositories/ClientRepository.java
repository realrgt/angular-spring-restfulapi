package com.ergito.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ergito.entities.Client;

public interface ClientRepository extends JpaRepository<Client, Long> {

}
