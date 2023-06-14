package com.capstone.capstone.repository;

import org.springframework.data.repository.PagingAndSortingRepository;

import com.capstone.capstone.model.Ordine;

public interface OrdinePageableRepository extends PagingAndSortingRepository<Ordine, Long>{

}
