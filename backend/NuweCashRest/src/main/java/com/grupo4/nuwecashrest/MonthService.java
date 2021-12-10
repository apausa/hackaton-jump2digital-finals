package com.grupo4.nuwecashrest;

import com.grupo4.nuwecashrest.classes.Month;
import com.grupo4.nuwecashrest.repos.MonthRepository;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.FileReader;
import java.io.Reader;
import java.sql.Time;
import java.util.*;

@Service
public class MonthService {

    @Autowired
    private MonthRepository monthRepository;

    public void createMonth(Month month) {
        monthRepository.save(month);
    }

    public Optional<Month> getMonth(UUID id) {
        return monthRepository.findById(id);
    }

    public void deleteMonth(UUID id) {
        monthRepository.deleteById(id);
    }

    public Iterable<Month> getAllMonths() {
        return monthRepository.findAll();
    }

    public int[] getNumUsersXMonth() {
        Iterable<Month> monthList = monthRepository.findAll();
        int numUsersXMonth[] = new int[12];

        for (Month m: monthList) {
            switch (String.valueOf(m.getNameUUID()).substring(0, 2)) {
                case "01":
                    numUsersXMonth[0] = m.getTotalUsers();
                    break;
                case "02":
                    numUsersXMonth[1] = m.getTotalUsers();
                    break;
                case "03":
                    numUsersXMonth[2] = m.getTotalUsers();
                    break;
                case "04:":
                    numUsersXMonth[3] = m.getTotalUsers();
                    break;
                case "05":
                    numUsersXMonth[4] = m.getTotalUsers();
                    break;
                case "06":
                    numUsersXMonth[5] = m.getTotalUsers();
                    break;
                case "07":
                    numUsersXMonth[6] = m.getTotalUsers();
                    break;
                case "08":
                    numUsersXMonth[7] = m.getTotalUsers();
                    break;
                case "09":
                    numUsersXMonth[8] = m.getTotalUsers();
                    break;
                case "10":
                    numUsersXMonth[9] = m.getTotalUsers();
                    break;
                case "11":
                    numUsersXMonth[10] = m.getTotalUsers();
                    break;
                case "12":
                    numUsersXMonth[11] = m.getTotalUsers();
                    break;
            }
        }
        return numUsersXMonth;
    }

    public int[] getNumOrdersXMonth() {
        Iterable<Month> monthList = monthRepository.findAll();
        int numOrdersXMonth[] = new int[12];

        for (Month m: monthList) {
            switch (String.valueOf(m.getNameUUID()).substring(0, 2)) {
                case "01":
                    numOrdersXMonth[0] = m.getTotalRequestedMoney();
                    break;
                case "02":
                    numOrdersXMonth[1] = m.getTotalRequestedMoney();
                    break;
                case "03":
                    numOrdersXMonth[2] = m.getTotalRequestedMoney();
                    break;
                case "04:":
                    numOrdersXMonth[3] = m.getTotalRequestedMoney();
                    break;
                case "05":
                    numOrdersXMonth[4] = m.getTotalRequestedMoney();
                    break;
                case "06":
                    numOrdersXMonth[5] = m.getTotalRequestedMoney();
                    break;
                case "07":
                    numOrdersXMonth[6] = m.getTotalRequestedMoney();
                    break;
                case "08":
                    numOrdersXMonth[7] = m.getTotalRequestedMoney();
                    break;
                case "09":
                    numOrdersXMonth[8] = m.getTotalRequestedMoney();
                    break;
                case "10":
                    numOrdersXMonth[9] = m.getTotalRequestedMoney();
                    break;
                case "11":
                    numOrdersXMonth[10] = m.getTotalRequestedMoney();
                    break;
                case "12":
                    numOrdersXMonth[11] = m.getTotalRequestedMoney();
                    break;
            }
        }
        return numOrdersXMonth;
    }

    public int getAcceptedRequests(String monthString) {
        Iterable<Month> monthList = monthRepository.findAll();
        for (Month m: monthList) {
            if (String.valueOf(m.getNameUUID()).substring(0, 2).equals(monthString)) {
                return m.getAcceptedRequestsPaid() + m.getAcceptedRequestsUnpaid();
            }
        }
        return 0;
    }

    public double getBudget(String monthString) {
        readJSON();
        /*Iterable<Month> monthList = monthRepository.findAll();
        for (Month m: monthList) {
            if (String.valueOf(m.getNameUUID()).substring(0, 2).equals(monthString)) {
                return m.getRealBudget();
            }
        }*/
        return 0;
    }

    public Time getLoanReturnTime(String monthString) {
        Iterable<Month> monthList = monthRepository.findAll();
        for (Month m: monthList) {
            if (String.valueOf(m.getNameUUID()).substring(0, 2).equals(monthString)) {
                return m.getLoanReturnTime();
            }
        }
        return null;
    }

    private void readJSON() {
        boolean next = true;
        int counter = 0;
        try {
            JSONParser parser = new JSONParser();
            Reader reader = new FileReader(getRelativePath("datos.json"));

            Object objMonths = parser.parse(reader);
            JSONObject jo_months = (JSONObject) objMonths;

            while (next) {
                try {
                    JSONArray ja_months = (JSONArray) jo_months.get(String.valueOf(counter));
                    for (Object objMonth : ja_months) {
                        JSONObject jo_month = (JSONObject) objMonth;

                        UUID nameUUID = (UUID) jo_month.get("UUID");
                        String name = (String) jo_month.get("Name");
                        int year = (int) (long) jo_month.get("year");
                        int month = (int) (long) jo_month.get("month");
                        int totalUsers = (int) (long) jo_month.get("totalUsers");
                        int newUsers = (int) (long) jo_month.get("newUsers");
                        int uniqueUsers = (int) (long) jo_month.get("uniqueUsers");
                        int requestedAmount = (int) (long) jo_month.get("requestedAmount");
                        double perPerUserAmount = (double) jo_month.get("percPerUserAmount");
                        int acceptedPaid = (int) (long) jo_month.get("acceptedPaid");
                        int acceptedUnpaid = (int) (long) jo_month.get("acceptedUnpaid");
                        double realBudget = (double) jo_month.get("realBudget");
                        double predictedBudget = (double) jo_month.get("predictedBudget");
                        int returnTime = (int) (long) jo_month.get("returnTime");

                        System.out.println(nameUUID);
                    }
                } catch (Exception e) {
                    System.out.println("ERROR 1");
                    next = false;
                }
            }
        } catch (Exception e) {
            System.out.println("ERROR 2");

        }
    }

    private String getRelativePath(String file) {
        String filePath = new File("").getAbsolutePath();
        filePath += "\\src\\main\\resources\\" + file;
        return filePath;
    }
}
