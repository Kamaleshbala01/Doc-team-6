package com.esports.controller;

import com.esports.entity.*;
import com.esports.service.impl.TournamentServiceImpl;
import com.esports.service.interfaces.TournamentService;

import java.math.BigDecimal;
import java.time.LocalDateTime;


public class TournamentController {

    private final TournamentService tournamentService = new TournamentServiceImpl();

    public void start() {
        System.out.println();
        System.out.println("=== Tournament Management ===");
        runTournamentCategoryCrud();
        runTournamentTypeCrud();
        runTournamentCrud();
        runRulesCategoryCrud();
        runTournamentRuleCrud();
        runPrizeCategoryCrud();
        runTournamentPrizeCrud();
        runTournamentRegistrationCrud();
        runTournamentRegistrationPaymentCrud();
        runTournamentAnnouncementCrud();
        runTournamentFAQCrud();
        runRoundDetailsCrud();
        runMatchDetailsCrud();
        runMatchParticipantsCrud();
    }

    /**
     * Central error handler for every CRUD demo below.
     * IllegalArgumentException -> the caller sent invalid data (bad input).
     * RuntimeException         -> a valid-looking request could not be completed
     *                             (not found, duplicate, persistence failure).
     * Anything else            -> unexpected failure, still reported, never crashes the run.
     */
    private void handleServiceError(String operation, Exception e) {
        if (e instanceof IllegalArgumentException) {
            System.out.println("[VALIDATION ERROR] " + operation + ": " + e.getMessage());
        } else if (e instanceof RuntimeException) {
            System.out.println("[ERROR] " + operation + ": " + e.getMessage());
        } else {
            System.out.println("[UNEXPECTED ERROR] " + operation + ": " + e.getMessage());
        }
    }

private void runTournamentCategoryCrud() {
    System.out.println("\n--- TournamentCategory CRUD ---");
    try {
        TournamentCategory record1 = new TournamentCategory();
        record1.setId(1);
        record1.setCategoryName("Brackets");
        record1.setCreatedAt(LocalDateTime.of(2022, 11, 1, 0, 0));

        tournamentService.createTournamentCategory(record1);
        System.out.println("Created: " + record1);

        TournamentCategory record2 = new TournamentCategory();
        record2.setId(2);
        record2.setCategoryName("Leaderboard");
        record2.setCreatedAt(LocalDateTime.of(2023, 1, 1, 0, 5));

        tournamentService.createTournamentCategory(record2);
        System.out.println("Created: " + record2);

        System.out.println("All TournamentCategory after create:");
        tournamentService.getAllTournamentCategorys().forEach(System.out::println);

        TournamentCategory updated = new TournamentCategory();
        updated.setId(1);
        updated.setCategoryName("Leaderboard");
        updated.setCreatedAt(LocalDateTime.of(2024, 2, 1, 0, 0));

        tournamentService.updateTournamentCategory(record1.getId(), updated);
        System.out.println("Updated record 1: " + updated);

        tournamentService.deleteTournamentCategory(record2.getId());
        System.out.println("Deleted record 2 (id=" + record2.getId() + ")");

        System.out.println("All TournamentCategory after update & delete:");
        tournamentService.getAllTournamentCategorys().forEach(System.out::println);
    } catch (Exception e) {
        handleServiceError("TournamentCategory CRUD", e);
    }
}

private void runTournamentTypeCrud() {
    System.out.println("\n--- TournamentType CRUD ---");
    try {
        TournamentType record1 = new TournamentType();
        record1.setId(1);
        record1.setCategoryId(1); // Brackets
        record1.setTypeName("Single Elimination");
        record1.setCreatedAt(LocalDateTime.of(2022, 11, 1, 0, 0));

        tournamentService.createTournamentType(record1);
        System.out.println("Created: " + record1);

        TournamentType record2 = new TournamentType();
        record2.setId(2);
        record2.setCategoryId(2); // Leaderboard
        record2.setTypeName("Points Based");
        record2.setCreatedAt(LocalDateTime.of(2023, 1, 1, 0, 5));

        tournamentService.createTournamentType(record2);
        System.out.println("Created: " + record2);

        System.out.println("All TournamentType after create:");
        tournamentService.getAllTournamentTypes().forEach(System.out::println);

        TournamentType updated = new TournamentType();
        updated.setId(1);
        updated.setCategoryId(1);
        updated.setTypeName("Double Elimination");
        updated.setCreatedAt(LocalDateTime.of(2024, 2, 1, 0, 0));

        tournamentService.updateTournamentType(record1.getId(), updated);
        System.out.println("Updated record 1: " + updated);

        tournamentService.deleteTournamentType(record2.getId());
        System.out.println("Deleted record 2 (id=" + record2.getId() + ")");

        System.out.println("All TournamentType after update & delete:");
        tournamentService.getAllTournamentTypes().forEach(System.out::println);
    } catch (Exception e) {
        handleServiceError("TournamentType CRUD", e);
    }
}

private void runTournamentCrud() {
    System.out.println("\n--- Tournament CRUD ---");
    try {
        Tournament record1 = new Tournament();
        record1.setId(1);
        record1.setOrganizerId(1);
        record1.setName("BGMI Championship 2024");
        record1.setDescription("National level BGMI tournament for professional teams");
        record1.setRegistrationStartDate(LocalDateTime.of(2024, 1, 1, 0, 0));
        record1.setRegistrationEndDate(LocalDateTime.of(2024, 1, 3, 0, 1));
        record1.setTournamentStartDate(LocalDateTime.of(2024, 2, 1, 0, 0));
        record1.setTournamentEndDate(LocalDateTime.of(2024, 2, 2, 0, 0));
        record1.setBannerFileId(1);
        record1.setCategoryId(1); // Brackets
        record1.setTournamentTypeId(1); // Single Elimination
        record1.setMaximumTeams(32);
        record1.setMaximumPlayersPerTeam(4);
        record1.setSeedingTypeId(1); // Random
        record1.setEntryFee(new BigDecimal("500.00"));
        record1.setVerificationRequired(true);
        record1.setPackageId(1);
        record1.setStatus("OPEN");
        record1.setCreatedAt(LocalDateTime.of(2023, 12, 1, 0, 1));
        record1.setUpdatedAt(LocalDateTime.of(2023, 12, 1, 0, 1));

        tournamentService.createTournament(record1);
        System.out.println("Created: " + record1);

        Tournament record2 = new Tournament();
        record2.setId(2);
        record2.setOrganizerId(2);
        record2.setName("Valorant Leaderboard League");
        record2.setDescription("Points-based Valorant tournament");
        record2.setRegistrationStartDate(LocalDateTime.of(2024, 3, 1, 0, 0));
        record2.setRegistrationEndDate(LocalDateTime.of(2024, 3, 1, 0, 5));
        record2.setTournamentStartDate(LocalDateTime.of(2024, 3, 2, 0, 0));
        record2.setTournamentEndDate(LocalDateTime.of(2024, 4, 2, 0, 0));
        record2.setBannerFileId(2);
        record2.setCategoryId(2); // Leaderboard
        record2.setTournamentTypeId(2); // Points Based
        record2.setMaximumTeams(50);
        record2.setMaximumPlayersPerTeam(5);
        record2.setSeedingTypeId(2); // Rank Based
        record2.setEntryFee(new BigDecimal("1000.00"));
        record2.setVerificationRequired(false);
        record2.setPackageId(2);
        record2.setStatus("UPCOMING");
        record2.setCreatedAt(LocalDateTime.of(2024, 2, 1, 0, 0));
        record2.setUpdatedAt(LocalDateTime.of(2024, 2, 1, 0, 0));

        tournamentService.createTournament(record2);
        System.out.println("Created: " + record2);

        System.out.println("All Tournament after create:");
        tournamentService.getAllTournaments().forEach(System.out::println);

        Tournament updated = new Tournament();
        updated.setId(1);
        updated.setOrganizerId(9);
        updated.setName("BGMI Masters Cup");
        updated.setDescription("Updated professional BGMI tournament");
        updated.setRegistrationStartDate(LocalDateTime.of(2024, 5, 1, 0, 0));
        updated.setRegistrationEndDate(LocalDateTime.of(2024, 5, 3, 0, 1));
        updated.setTournamentStartDate(LocalDateTime.of(2024, 6, 1, 0, 0));
        updated.setTournamentEndDate(LocalDateTime.of(2024, 6, 2, 0, 5));
        updated.setBannerFileId(9);
        updated.setCategoryId(1);
        updated.setTournamentTypeId(1);
        updated.setMaximumTeams(64);
        updated.setMaximumPlayersPerTeam(4);
        updated.setSeedingTypeId(3); // Manual
        updated.setEntryFee(new BigDecimal("1500.00"));
        updated.setVerificationRequired(true);
        updated.setPackageId(9);
        updated.setStatus("ACTIVE");
        updated.setCreatedAt(LocalDateTime.of(2024, 4, 1, 0, 0));
        updated.setUpdatedAt(LocalDateTime.of(2024, 4, 1, 0, 5));

        tournamentService.updateTournament(record1.getId(), updated);
        System.out.println("Updated record 1: " + updated);

        tournamentService.deleteTournament(record2.getId());
        System.out.println("Deleted record 2 (id=" + record2.getId() + ")");

        System.out.println("All Tournament after update & delete:");
        tournamentService.getAllTournaments().forEach(System.out::println);
    } catch (Exception e) {
        handleServiceError("Tournament CRUD", e);
    }
}

private void runRulesCategoryCrud() {
    System.out.println("\n--- RulesCategory CRUD ---");
    try {
        RulesCategory record1 = new RulesCategory();
        record1.setId(1);
        record1.setCategoryName("Eligibility Rules");
        record1.setCreatedAt(LocalDateTime.of(2022, 11, 1, 0, 0));

        tournamentService.createRulesCategory(record1);
        System.out.println("Created: " + record1);

        RulesCategory record2 = new RulesCategory();
        record2.setId(2);
        record2.setCategoryName("Gameplay Rules");
        record2.setCreatedAt(LocalDateTime.of(2023, 1, 1, 0, 5));

        tournamentService.createRulesCategory(record2);
        System.out.println("Created: " + record2);

        System.out.println("All RulesCategory after create:");
        tournamentService.getAllRulesCategorys().forEach(System.out::println);

        RulesCategory updated = new RulesCategory();
        updated.setId(1);
        updated.setCategoryName("Prize & Penalty Rules");
        updated.setCreatedAt(LocalDateTime.of(2024, 2, 1, 0, 0));

        tournamentService.updateRulesCategory(record1.getId(), updated);
        System.out.println("Updated record 1: " + updated);

        tournamentService.deleteRulesCategory(record2.getId());
        System.out.println("Deleted record 2 (id=" + record2.getId() + ")");

        System.out.println("All RulesCategory after update & delete:");
        tournamentService.getAllRulesCategorys().forEach(System.out::println);
    } catch (Exception e) {
        handleServiceError("RulesCategory CRUD", e);
    }
}

private void runTournamentRuleCrud() {
    System.out.println("\n--- TournamentRule CRUD ---");
    try {
        TournamentRule record1 = new TournamentRule();
        record1.setId(1);
        record1.setTournamentId(1);
        record1.setCategoryId(1); // Eligibility Rules
        record1.setRuleText("All players must be at least 16 years old and have a valid game account.");
        record1.setCreatedBy(1);
        record1.setCreatedAt(LocalDateTime.of(2022, 11, 1, 0, 0));
        record1.setUpdatedAt(LocalDateTime.of(2022, 11, 1, 0, 0));

        tournamentService.createTournamentRule(record1);
        System.out.println("Created: " + record1);

        TournamentRule record2 = new TournamentRule();
        record2.setId(2);
        record2.setTournamentId(2);
        record2.setCategoryId(2); // Gameplay Rules
        record2.setRuleText("Use of cheats, hacks, or unauthorized third-party software is strictly prohibited.");
        record2.setCreatedBy(2);
        record2.setCreatedAt(LocalDateTime.of(2023, 1, 1, 0, 5));
        record2.setUpdatedAt(LocalDateTime.of(2023, 1, 1, 0, 5));

        tournamentService.createTournamentRule(record2);
        System.out.println("Created: " + record2);

        System.out.println("All TournamentRule after create:");
        tournamentService.getAllTournamentRules().forEach(System.out::println);

        TournamentRule updated = new TournamentRule();
        updated.setId(1);
        updated.setTournamentId(1);
        updated.setCategoryId(1);
        updated.setRuleText("Players must be at least 18 years old and complete identity verification before registration.");
        updated.setCreatedBy(9);
        updated.setCreatedAt(LocalDateTime.of(2024, 2, 1, 0, 0));
        updated.setUpdatedAt(LocalDateTime.of(2024, 2, 1, 0, 0));

        tournamentService.updateTournamentRule(record1.getId(), updated);
        System.out.println("Updated record 1: " + updated);

        tournamentService.deleteTournamentRule(record2.getId());
        System.out.println("Deleted record 2 (id=" + record2.getId() + ")");

        System.out.println("All TournamentRule after update & delete:");
        tournamentService.getAllTournamentRules().forEach(System.out::println);
    } catch (Exception e) {
        handleServiceError("TournamentRule CRUD", e);
    }
}

private void runPrizeCategoryCrud() {
    System.out.println("\n--- PrizeCategory CRUD ---");
    try {
        PrizeCategory record1 = new PrizeCategory();
        record1.setId(1);
        record1.setName("Cash Prize");
        record1.setCreatedAt(LocalDateTime.of(2022, 11, 1, 0, 0));

        tournamentService.createPrizeCategory(record1);
        System.out.println("Created: " + record1);

        PrizeCategory record2 = new PrizeCategory();
        record2.setId(2);
        record2.setName("In-Game Rewards");
        record2.setCreatedAt(LocalDateTime.of(2023, 1, 1, 0, 5));

        tournamentService.createPrizeCategory(record2);
        System.out.println("Created: " + record2);

        System.out.println("All PrizeCategory after create:");
        tournamentService.getAllPrizeCategorys().forEach(System.out::println);

        PrizeCategory updated = new PrizeCategory();
        updated.setId(1);
        updated.setName("Gaming Hardware");
        updated.setCreatedAt(LocalDateTime.of(2024, 2, 1, 0, 0));

        tournamentService.updatePrizeCategory(record1.getId(), updated);
        System.out.println("Updated record 1: " + updated);

        tournamentService.deletePrizeCategory(record2.getId());
        System.out.println("Deleted record 2 (id=" + record2.getId() + ")");

        System.out.println("All PrizeCategory after update & delete:");
        tournamentService.getAllPrizeCategorys().forEach(System.out::println);
    } catch (Exception e) {
        handleServiceError("PrizeCategory CRUD", e);
    }
}

private void runTournamentPrizeCrud() {
    System.out.println("\n--- TournamentPrize CRUD ---");
    try {
        TournamentPrize record1 = new TournamentPrize();
        record1.setId(1);
        record1.setTournamentId(1);
        record1.setPrizeCategoryId(1); // Cash Prize
        record1.setPositionName("Champion");
        record1.setRankOrder(1);
        record1.setPrizeAmount(new BigDecimal("50000.00"));
        record1.setPrizeDescription("Winner receives cash prize and trophy");
        record1.setCreatedAt(LocalDateTime.of(2022, 11, 1, 0, 0));
        record1.setUpdatedAt(LocalDateTime.of(2022, 11, 1, 0, 0));

        tournamentService.createTournamentPrize(record1);
        System.out.println("Created: " + record1);

        TournamentPrize record2 = new TournamentPrize();
        record2.setId(2);
        record2.setTournamentId(1);
        record2.setPrizeCategoryId(2); // In-Game Rewards
        record2.setPositionName("Runner Up");
        record2.setRankOrder(2);
        record2.setPrizeAmount(new BigDecimal("25000.00"));
        record2.setPrizeDescription("Runner-up receives in-game rewards and medals");
        record2.setCreatedAt(LocalDateTime.of(2023, 1, 1, 0, 5));
        record2.setUpdatedAt(LocalDateTime.of(2023, 1, 1, 0, 5));

        tournamentService.createTournamentPrize(record2);
        System.out.println("Created: " + record2);

        System.out.println("All TournamentPrize after create:");
        tournamentService.getAllTournamentPrizes().forEach(System.out::println);

        TournamentPrize updated = new TournamentPrize();
        updated.setId(1);
        updated.setTournamentId(1);
        updated.setPrizeCategoryId(1);
        updated.setPositionName("Grand Champion");
        updated.setRankOrder(1);
        updated.setPrizeAmount(new BigDecimal("100000.00"));
        updated.setPrizeDescription("Grand Champion receives cash prize, trophy, and sponsor rewards");
        updated.setCreatedAt(LocalDateTime.of(2024, 2, 1, 0, 0));
        updated.setUpdatedAt(LocalDateTime.of(2024, 2, 1, 0, 0));

        tournamentService.updateTournamentPrize(record1.getId(), updated);
        System.out.println("Updated record 1: " + updated);

        tournamentService.deleteTournamentPrize(record2.getId());
        System.out.println("Deleted record 2 (id=" + record2.getId() + ")");

        System.out.println("All TournamentPrize after update & delete:");
        tournamentService.getAllTournamentPrizes().forEach(System.out::println);
    } catch (Exception e) {
        handleServiceError("TournamentPrize CRUD", e);
    }
}

private void runTournamentRegistrationCrud() {
    System.out.println("\n--- TournamentRegistration CRUD ---");
    try {
        TournamentRegistration record1 = new TournamentRegistration();
        record1.setId(1);
        record1.setTournamentId(1);
        record1.setTeamId(1);
        record1.setRegistrationStatusId(1); // Pending
        record1.setRegistrationDate(LocalDateTime.of(2024, 1, 1, 0, 0));
        record1.setApprovedBy(1);
        record1.setApprovedDate(LocalDateTime.of(2024, 1, 1, 0, 2));
        record1.setCreatedAt(LocalDateTime.of(2024, 1, 1, 0, 0));
        record1.setUpdatedAt(LocalDateTime.of(2024, 1, 1, 0, 2));

        tournamentService.createTournamentRegistration(record1);
        System.out.println("Created: " + record1);

        TournamentRegistration record2 = new TournamentRegistration();
        record2.setId(2);
        record2.setTournamentId(2);
        record2.setTeamId(2);
        record2.setRegistrationStatusId(2); // Approved
        record2.setRegistrationDate(LocalDateTime.of(2024, 2, 5, 0, 0));
        record2.setApprovedBy(2);
        record2.setApprovedDate(LocalDateTime.of(2024, 2, 6, 0, 0));
        record2.setCreatedAt(LocalDateTime.of(2024, 2, 5, 0, 0));
        record2.setUpdatedAt(LocalDateTime.of(2024, 2, 6, 0, 0));

        tournamentService.createTournamentRegistration(record2);
        System.out.println("Created: " + record2);

        System.out.println("All TournamentRegistration after create:");
        tournamentService.getAllTournamentRegistrations().forEach(System.out::println);

        TournamentRegistration updated = new TournamentRegistration();
        updated.setId(1);
        updated.setTournamentId(1);
        updated.setTeamId(9);
        updated.setRegistrationStatusId(2); // Approved
        updated.setRegistrationDate(LocalDateTime.of(2024, 3, 1, 0, 0));
        updated.setApprovedBy(9);
        updated.setApprovedDate(LocalDateTime.of(2024, 3, 2, 0, 0));
        updated.setCreatedAt(LocalDateTime.of(2024, 3, 1, 0, 0));
        updated.setUpdatedAt(LocalDateTime.of(2024, 3, 2, 0, 0));

        tournamentService.updateTournamentRegistration(record1.getId(), updated);
        System.out.println("Updated record 1: " + updated);

        tournamentService.deleteTournamentRegistration(record2.getId());
        System.out.println("Deleted record 2 (id=" + record2.getId() + ")");

        System.out.println("All TournamentRegistration after update & delete:");
        tournamentService.getAllTournamentRegistrations().forEach(System.out::println);
    } catch (Exception e) {
        handleServiceError("TournamentRegistration CRUD", e);
    }
}

private void runTournamentRegistrationPaymentCrud() {
    System.out.println("\n--- TournamentRegistrationPayment CRUD ---");
    try {
        TournamentRegistrationPayment record1 = new TournamentRegistrationPayment();
        record1.setId(1);
        record1.setRegistrationId(1);
        record1.setTournamentId(1);
        record1.setParticipantId(1);
        record1.setAmount(new BigDecimal("500.00"));
        record1.setPaymentReference("REG-PAY-1001");
        record1.setPaymentStatus("COMPLETED");
        record1.setPaidDate(LocalDateTime.of(2024, 1, 1, 0, 5));
        record1.setCreatedAt(LocalDateTime.of(2024, 1, 1, 0, 5));

        tournamentService.createTournamentRegistrationPayment(record1);
        System.out.println("Created: " + record1);

        TournamentRegistrationPayment record2 = new TournamentRegistrationPayment();
        record2.setId(2);
        record2.setRegistrationId(2);
        record2.setTournamentId(2);
        record2.setParticipantId(2);
        record2.setAmount(new BigDecimal("1000.00"));
        record2.setPaymentReference("REG-PAY-2002");
        record2.setPaymentStatus("PENDING");
        record2.setPaidDate(LocalDateTime.of(2024, 2, 1, 0, 0));
        record2.setCreatedAt(LocalDateTime.of(2024, 2, 1, 0, 0));

        tournamentService.createTournamentRegistrationPayment(record2);
        System.out.println("Created: " + record2);

        System.out.println("All TournamentRegistrationPayment after create:");
        tournamentService.getAllTournamentRegistrationPayments().forEach(System.out::println);

        TournamentRegistrationPayment updated = new TournamentRegistrationPayment();
        updated.setId(1);
        updated.setRegistrationId(1);
        updated.setTournamentId(1);
        updated.setParticipantId(9);
        updated.setAmount(new BigDecimal("1500.00"));
        updated.setPaymentReference("REG-PAY-9009");
        updated.setPaymentStatus("COMPLETED");
        updated.setPaidDate(LocalDateTime.of(2024, 3, 1, 0, 0));
        updated.setCreatedAt(LocalDateTime.of(2024, 3, 1, 0, 0));

        tournamentService.updateTournamentRegistrationPayment(record1.getId(), updated);
        System.out.println("Updated record 1: " + updated);

        tournamentService.deleteTournamentRegistrationPayment(record2.getId());
        System.out.println("Deleted record 2 (id=" + record2.getId() + ")");

        System.out.println("All TournamentRegistrationPayment after update & delete:");
        tournamentService.getAllTournamentRegistrationPayments().forEach(System.out::println);
    } catch (Exception e) {
        handleServiceError("TournamentRegistrationPayment CRUD", e);
    }
}

private void runTournamentAnnouncementCrud() {
    System.out.println("\n--- TournamentAnnouncement CRUD ---");
    try {
        TournamentAnnouncement record1 = new TournamentAnnouncement();
        record1.setId(1);
        record1.setTournamentId(1);
        record1.setTitle("Registration Open");
        record1.setContent("Registrations are now open for the BGMI Championship 2024.");
        record1.setCreatedAt(LocalDateTime.of(2024, 1, 1, 0, 0));
        record1.setUpdatedAt(LocalDateTime.of(2024, 1, 1, 0, 0));

        tournamentService.createTournamentAnnouncement(record1);
        System.out.println("Created: " + record1);

        TournamentAnnouncement record2 = new TournamentAnnouncement();
        record2.setId(2);
        record2.setTournamentId(2);
        record2.setTitle("Match Schedule Released");
        record2.setContent("The tournament match schedule has been published for all registered teams.");
        record2.setCreatedAt(LocalDateTime.of(2024, 2, 1, 0, 0));
        record2.setUpdatedAt(LocalDateTime.of(2024, 2, 1, 0, 0));

        tournamentService.createTournamentAnnouncement(record2);
        System.out.println("Created: " + record2);

        System.out.println("All TournamentAnnouncement after create:");
        tournamentService.getAllTournamentAnnouncements().forEach(System.out::println);

        TournamentAnnouncement updated = new TournamentAnnouncement();
        updated.setId(1);
        updated.setTournamentId(1);
        updated.setTitle("Registration Extended");
        updated.setContent("Registration deadline has been extended by one week.");
        updated.setCreatedAt(LocalDateTime.of(2024, 2, 1, 0, 0));
        updated.setUpdatedAt(LocalDateTime.of(2024, 2, 1, 0, 0));

        tournamentService.updateTournamentAnnouncement(record1.getId(), updated);
        System.out.println("Updated record 1: " + updated);

        tournamentService.deleteTournamentAnnouncement(record2.getId());
        System.out.println("Deleted record 2 (id=" + record2.getId() + ")");

        System.out.println("All TournamentAnnouncement after update & delete:");
        tournamentService.getAllTournamentAnnouncements().forEach(System.out::println);
    } catch (Exception e) {
        handleServiceError("TournamentAnnouncement CRUD", e);
    }
}

private void runTournamentFAQCrud() {
    System.out.println("\n--- TournamentFAQ CRUD ---");
    try {
        TournamentFAQ record1 = new TournamentFAQ();
        record1.setId(1);
        record1.setTournamentId(1);
        record1.setUserId(1);
        record1.setQuestion("What is the minimum age requirement to participate?");
        record1.setAnswer("Participants must be at least 16 years old.");
        record1.setStatus("APPROVED");
        record1.setCreatedAt(LocalDateTime.of(2024, 1, 5, 0, 0));
        record1.setUpdatedAt(LocalDateTime.of(2024, 1, 5, 0, 0));

        tournamentService.createTournamentFAQ(record1);
        System.out.println("Created: " + record1);

        TournamentFAQ record2 = new TournamentFAQ();
        record2.setId(2);
        record2.setTournamentId(2);
        record2.setUserId(2);
        record2.setQuestion("How many players are allowed per team?");
        record2.setAnswer("Each team can have a maximum of 5 players.");
        record2.setStatus("PENDING");
        record2.setCreatedAt(LocalDateTime.of(2024, 2, 1, 0, 0));
        record2.setUpdatedAt(LocalDateTime.of(2024, 2, 1, 0, 0));

        tournamentService.createTournamentFAQ(record2);
        System.out.println("Created: " + record2);

        System.out.println("All TournamentFAQ after create:");
        tournamentService.getAllTournamentFAQs().forEach(System.out::println);

        TournamentFAQ updated = new TournamentFAQ();
        updated.setId(1);
        updated.setTournamentId(1);
        updated.setUserId(9);
        updated.setQuestion("Is identity verification mandatory?");
        updated.setAnswer("Yes, all participants must complete identity verification before registration approval.");
        updated.setStatus("APPROVED");
        updated.setCreatedAt(LocalDateTime.of(2024, 3, 1, 0, 0));
        updated.setUpdatedAt(LocalDateTime.of(2024, 3, 1, 0, 0));

        tournamentService.updateTournamentFAQ(record1.getId(), updated);
        System.out.println("Updated record 1: " + updated);

        tournamentService.deleteTournamentFAQ(record2.getId());
        System.out.println("Deleted record 2 (id=" + record2.getId() + ")");

        System.out.println("All TournamentFAQ after update & delete:");
        tournamentService.getAllTournamentFAQs().forEach(System.out::println);
    } catch (Exception e) {
        handleServiceError("TournamentFAQ CRUD", e);
    }
}

private void runRoundDetailsCrud() {
    System.out.println("\n--- RoundDetails CRUD ---");
    try {
        RoundDetails record1 = new RoundDetails();
        record1.setId(1);
        record1.setTournamentId(1);
        record1.setRoundName("Quarter Final");
        record1.setMaximumParticipants(32);
        record1.setQualifyingCount(16);

        tournamentService.createRoundDetails(record1);
        System.out.println("Created: " + record1);

        RoundDetails record2 = new RoundDetails();
        record2.setId(2);
        record2.setTournamentId(1);
        record2.setRoundName("Semi Final");
        record2.setMaximumParticipants(16);
        record2.setQualifyingCount(8);

        tournamentService.createRoundDetails(record2);
        System.out.println("Created: " + record2);

        System.out.println("All RoundDetails after create:");
        tournamentService.getAllRoundDetails().forEach(System.out::println);

        RoundDetails updated = new RoundDetails();
        updated.setId(1);
        updated.setTournamentId(1);
        updated.setRoundName("Quarter Final - Rescheduled");
        updated.setMaximumParticipants(32);
        updated.setQualifyingCount(8);

        tournamentService.updateRoundDetails(record1.getId(), updated);
        System.out.println("Updated record 1: " + updated);

        tournamentService.deleteRoundDetails(record2.getId());
        System.out.println("Deleted record 2 (id=" + record2.getId() + ")");

        System.out.println("All RoundDetails after update & delete:");
        tournamentService.getAllRoundDetails().forEach(System.out::println);
    } catch (Exception e) {
        handleServiceError("RoundDetails CRUD", e);
    }
}

private void runMatchDetailsCrud() {
    System.out.println("\n--- MatchDetails CRUD ---");
    try {
        MatchDetails record1 = new MatchDetails();
        record1.setId(1);
        record1.setRoundId(1);
        record1.setStartTime(LocalDateTime.of(2024, 2, 1, 10, 0));
        record1.setEndTime(LocalDateTime.of(2024, 2, 1, 11, 0));
        record1.setStatus("SCHEDULED");

        tournamentService.createMatchDetails(record1);
        System.out.println("Created: " + record1);

        MatchDetails record2 = new MatchDetails();
        record2.setId(2);
        record2.setRoundId(1);
        record2.setStartTime(LocalDateTime.of(2024, 2, 1, 12, 0));
        record2.setEndTime(LocalDateTime.of(2024, 2, 1, 13, 0));
        record2.setStatus("SCHEDULED");

        tournamentService.createMatchDetails(record2);
        System.out.println("Created: " + record2);

        System.out.println("All MatchDetails after create:");
        tournamentService.getAllMatchDetails().forEach(System.out::println);

        MatchDetails updated = new MatchDetails();
        updated.setId(1);
        updated.setRoundId(1);
        updated.setStartTime(LocalDateTime.of(2024, 2, 1, 10, 30));
        updated.setEndTime(LocalDateTime.of(2024, 2, 1, 11, 30));
        updated.setStatus("COMPLETED");

        tournamentService.updateMatchDetails(record1.getId(), updated);
        System.out.println("Updated record 1: " + updated);

        tournamentService.deleteMatchDetails(record2.getId());
        System.out.println("Deleted record 2 (id=" + record2.getId() + ")");

        System.out.println("All MatchDetails after update & delete:");
        tournamentService.getAllMatchDetails().forEach(System.out::println);
    } catch (Exception e) {
        handleServiceError("MatchDetails CRUD", e);
    }
}

private void runMatchParticipantsCrud() {
    System.out.println("\n--- MatchParticipants CRUD ---");
    try {
        MatchParticipants record1 = new MatchParticipants();
        record1.setId(1);
        record1.setMatchId(1);
        record1.setTeamId(1);
        record1.setStatus("QUALIFIED");

        tournamentService.createMatchParticipants(record1);
        System.out.println("Created: " + record1);

        MatchParticipants record2 = new MatchParticipants();
        record2.setId(2);
        record2.setMatchId(1);
        record2.setTeamId(2);
        record2.setStatus("QUALIFIED");

        tournamentService.createMatchParticipants(record2);
        System.out.println("Created: " + record2);

        System.out.println("All MatchParticipants after create:");
        tournamentService.getAllMatchParticipants().forEach(System.out::println);

        MatchParticipants updated = new MatchParticipants();
        updated.setId(1);
        updated.setMatchId(1);
        updated.setTeamId(1);
        updated.setStatus("WON");

        tournamentService.updateMatchParticipants(record1.getId(), updated);
        System.out.println("Updated record 1: " + updated);

        tournamentService.deleteMatchParticipants(record2.getId());
        System.out.println("Deleted record 2 (id=" + record2.getId() + ")");

        System.out.println("All MatchParticipants after update & delete:");
        tournamentService.getAllMatchParticipants().forEach(System.out::println);
    } catch (Exception e) {
        handleServiceError("MatchParticipants CRUD", e);
    }
}

}
