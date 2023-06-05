package com.capstone.capstone.repository;

import org.springframework.data.repository.PagingAndSortingRepository;

import com.capstone.capstone.model.Attrezzo;

public interface AttrezzoPageableRepository extends PagingAndSortingRepository<Attrezzo, Long>{

}
