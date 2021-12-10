package com.grupo4.nuwecashrest;

import com.grupo4.nuwecashrest.classes.Month;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Time;

import java.util.Optional;
import java.util.UUID;

@RestController
public class MonthController {

    @Autowired
    private MonthService monthService;

    @PostMapping("/month")
    public void createMonth(@RequestBody Month month) {
        monthService.createMonth(month);
    }

    @RequestMapping("/month/{id}")
    public @ResponseBody
    Optional<Month> getMonth(@PathVariable("id") UUID id) {
        return monthService.getMonth(id);
    }

    @DeleteMapping("/month/{id}")
    public void deleteMonth(@PathVariable("id") UUID id) {
        monthService.deleteMonth(id);
    }

    @RequestMapping("/month")
    public @ResponseBody Iterable<Month> getAllMonths() {
        return monthService.getAllMonths();
    }

    @RequestMapping("/totalUsers")
    public int[] getTotalUsers() {
        return monthService.getNumUsersXMonth();
    }

    @RequestMapping("/requestedMoney")
    public int[] getRequestedMoney() {
        return monthService.getNumOrdersXMonth();
    }

    @RequestMapping("/acceptedRequests/{monthString}")
    public int getAcceptedRequests(@PathVariable("monthString") String monthString) {
        return monthService.getAcceptedRequests(monthString);
    }

    @RequestMapping("/budget/{monthString}")
    public double getBudget(@PathVariable("monthString") String monthString) {
        return monthService.getBudget(monthString);
    }

    @RequestMapping("/time/{monthString}")
    public Time getTime(@PathVariable("monthString") String monthString) {
        return monthService.getLoanReturnTime(monthString);
    }


    @RequestMapping("/prova")
    public @ResponseBody String prova() {
        return "String prova";
    }



}
