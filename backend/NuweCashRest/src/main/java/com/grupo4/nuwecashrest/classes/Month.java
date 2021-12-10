package com.grupo4.nuwecashrest.classes;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.sql.Time;
import java.util.UUID;

@Entity
public class Month {

    @Id
    private UUID nameUUID;
    private String name;
    private int totalUsers;
    private int totalNewUsers;
    private int totalUniqueUsers;
    private int totalRequestedMoney;
    private int perUserRequestedMoney;
    private int acceptedRequestsPaid;
    private int acceptedRequestsUnpaid;
    private Time loanReturnTime;
    private double realBudget;
    private double predictedBudget;

    public UUID getNameUUID() {
        return nameUUID;
    }

    public void setNameUUID(UUID nameUUID) {
        this.nameUUID = nameUUID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getTotalUsers() {
        return totalUsers;
    }

    public void setTotalUsers(int totalUsers) {
        this.totalUsers = totalUsers;
    }

    public int getTotalNewUsers() {
        return totalNewUsers;
    }

    public void setTotalNewUsers(int totalNewUsers) {
        this.totalNewUsers = totalNewUsers;
    }

    public int getTotalUniqueUsers() {
        return totalUniqueUsers;
    }

    public void setTotalUniqueUsers(int totalUniqueUsers) {
        this.totalUniqueUsers = totalUniqueUsers;
    }

    public int getTotalRequestedMoney() {
        return totalRequestedMoney;
    }

    public void setTotalRequestedMoney(int totalRequestedMoney) {
        this.totalRequestedMoney = totalRequestedMoney;
    }

    public int getPerUserRequestedMoney() {
        return perUserRequestedMoney;
    }

    public void setPerUserRequestedMoney(int perUserRequestedMoney) {
        this.perUserRequestedMoney = perUserRequestedMoney;
    }

    public int getAcceptedRequestsPaid() {
        return acceptedRequestsPaid;
    }

    public void setAcceptedRequestsPaid(int acceptedRequestsPaid) {
        this.acceptedRequestsPaid = acceptedRequestsPaid;
    }

    public int getAcceptedRequestsUnpaid() {
        return acceptedRequestsUnpaid;
    }

    public void setAcceptedRequestsUnpaid(int acceptedRequestsUnpaid) {
        this.acceptedRequestsUnpaid = acceptedRequestsUnpaid;
    }

    public Time getLoanReturnTime() {
        return loanReturnTime;
    }

    public void setLoanReturnTime(Time loanReturnTime) {
        this.loanReturnTime = loanReturnTime;
    }

    public double getRealBudget() {
        return realBudget;
    }

    public void setRealBudget(double realBudget) {
        this.realBudget = realBudget;
    }

    public double getPredictedBudget() {
        return predictedBudget;
    }

    public void setPredictedBudget(double predictedBudget) {
        this.predictedBudget = predictedBudget;
    }
}
