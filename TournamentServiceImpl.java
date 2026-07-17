package com.esports.service.impl;

import java.util.List;

import com.esports.DAO.impl.TournamentDAOImpl;
import com.esports.DAO.interfaces.TournamentDAO;
import com.esports.entity.MatchDetails;
import com.esports.entity.MatchParticipants;
import com.esports.entity.PrizeCategory;
import com.esports.entity.RoundDetails;
import com.esports.entity.RulesCategory;
import com.esports.entity.Tournament;
import com.esports.entity.TournamentAnnouncement;
import com.esports.entity.TournamentCategory;
import com.esports.entity.TournamentFAQ;
import com.esports.entity.TournamentPrize;
import com.esports.entity.TournamentRegistration;
import com.esports.entity.TournamentRegistrationPayment;
import com.esports.entity.TournamentRule;
import com.esports.entity.TournamentType;
import com.esports.service.interfaces.TournamentService;

/**
 * Service layer for the Tournament Management module.
 *
 * Responsibilities of this layer:
 *  - Validate incoming data (required fields, value ranges, referential
 *    integrity against related entities in this module) before it is
 *    ever handed to the DAO.
 *  - Enforce existence checks for get/update/delete so the DAO (which is a
 *    thin JDBC layer) never has to guess whether a row is really there.
 *  - Translate "bad input" into IllegalArgumentException and
 *    "valid input but not possible right now" (not found, duplicate,
 *    persistence failure) into RuntimeException, so the controller layer
 *    has exactly two things to catch.
 *
 * All actual persistence is delegated to TournamentDAO; this class never
 * touches JDBC directly.
 */
public class TournamentServiceImpl implements TournamentService {

    private final TournamentDAO tournamentDAO = new TournamentDAOImpl();

    // ==========================================================
    // Small validation helpers shared by every entity below
    // ==========================================================

    private void requireEntity(Object entity, String entityName) {
        if (entity == null) {
            throw new IllegalArgumentException(entityName + " cannot be null");
        }
    }

    private void requireValidId(Integer id, String fieldName) {
        if (id == null || id <= 0) {
            throw new IllegalArgumentException("Invalid " + fieldName);
        }
    }

    private void requireNonBlank(String value, String fieldName) {
        if (value == null || value.trim().isEmpty()) {
            throw new IllegalArgumentException(fieldName + " is required");
        }
    }

    private void requirePositive(Integer value, String fieldName) {
        if (value == null || value <= 0) {
            throw new IllegalArgumentException(fieldName + " must be a positive number");
        }
    }

    private void requireNonNegative(Integer value, String fieldName) {
        if (value == null || value < 0) {
            throw new IllegalArgumentException(fieldName + " cannot be negative");
        }
    }

    private void requireNonNegative(java.math.BigDecimal value, String fieldName) {
        if (value == null || value.compareTo(java.math.BigDecimal.ZERO) < 0) {
            throw new IllegalArgumentException(fieldName + " cannot be negative");
        }
    }

    private void requirePositive(java.math.BigDecimal value, String fieldName) {
        if (value == null || value.compareTo(java.math.BigDecimal.ZERO) <= 0) {
            throw new IllegalArgumentException(fieldName + " must be greater than zero");
        }
    }

    private void requireNotNull(Object value, String fieldName) {
        if (value == null) {
            throw new IllegalArgumentException(fieldName + " is required");
        }
    }

    // ==========================================================
    // TournamentCategory
    // ==========================================================

    @Override
    public TournamentCategory createTournamentCategory(TournamentCategory entity) {
        requireEntity(entity, "TournamentCategory");
        requireNonBlank(entity.getCategoryName(), "Category name");

        if (entity.getId() != null) {
            TournamentCategory existing = tournamentDAO.getTournamentCategoryById(entity.getId());
            if (existing != null) {
                throw new RuntimeException("Tournament Category already exists with id: " + entity.getId());
            }
        }

        TournamentCategory created = tournamentDAO.createTournamentCategory(entity);
        if (created == null) {
            throw new RuntimeException("Failed to create Tournament Category");
        }
        return created;
    }

    @Override
    public TournamentCategory getTournamentCategoryById(Integer id) {
        requireValidId(id, "category id");

        TournamentCategory category = tournamentDAO.getTournamentCategoryById(id);
        if (category == null) {
            throw new RuntimeException("Tournament Category not found with id: " + id);
        }
        return category;
    }

    @Override
    public List<TournamentCategory> getAllTournamentCategorys() {
        return tournamentDAO.getAllTournamentCategorys();
    }

    @Override
    public TournamentCategory updateTournamentCategory(Integer id, TournamentCategory entity) {
        requireValidId(id, "category id");
        requireEntity(entity, "TournamentCategory");

        TournamentCategory existing = tournamentDAO.getTournamentCategoryById(id);
        if (existing == null) {
            throw new RuntimeException("Tournament Category not found with id: " + id);
        }

        requireNonBlank(entity.getCategoryName(), "Category name");

        TournamentCategory updated = tournamentDAO.updateTournamentCategory(id, entity);
        if (updated == null) {
            throw new RuntimeException("Failed to update Tournament Category with id: " + id);
        }
        return updated;
    }

    @Override
    public boolean deleteTournamentCategory(Integer id) {
        requireValidId(id, "category id");

        TournamentCategory existing = tournamentDAO.getTournamentCategoryById(id);
        if (existing == null) {
            throw new RuntimeException("Tournament Category not found with id: " + id);
        }

        return tournamentDAO.deleteTournamentCategory(id);
    }

    // ==========================================================
    // TournamentType
    // ==========================================================

    @Override
    public TournamentType createTournamentType(TournamentType entity) {
        requireEntity(entity, "TournamentType");
        requireNotNull(entity.getCategoryId(), "Category id");
        requireNonBlank(entity.getTypeName(), "Type name");

        if (tournamentDAO.getTournamentCategoryById(entity.getCategoryId()) == null) {
            throw new RuntimeException("Tournament Category not found with id: " + entity.getCategoryId());
        }

        if (entity.getId() != null) {
            TournamentType existing = tournamentDAO.getTournamentTypeById(entity.getId());
            if (existing != null) {
                throw new RuntimeException("Tournament Type already exists with id: " + entity.getId());
            }
        }

        TournamentType created = tournamentDAO.createTournamentType(entity);
        if (created == null) {
            throw new RuntimeException("Failed to create Tournament Type");
        }
        return created;
    }

    @Override
    public TournamentType getTournamentTypeById(Integer id) {
        requireValidId(id, "tournament type id");

        TournamentType type = tournamentDAO.getTournamentTypeById(id);
        if (type == null) {
            throw new RuntimeException("Tournament Type not found with id: " + id);
        }
        return type;
    }

    @Override
    public List<TournamentType> getAllTournamentTypes() {
        return tournamentDAO.getAllTournamentTypes();
    }

    @Override
    public TournamentType updateTournamentType(Integer id, TournamentType entity) {
        requireValidId(id, "tournament type id");
        requireEntity(entity, "TournamentType");

        TournamentType existing = tournamentDAO.getTournamentTypeById(id);
        if (existing == null) {
            throw new RuntimeException("Tournament Type not found with id: " + id);
        }

        requireNotNull(entity.getCategoryId(), "Category id");
        requireNonBlank(entity.getTypeName(), "Type name");

        if (tournamentDAO.getTournamentCategoryById(entity.getCategoryId()) == null) {
            throw new RuntimeException("Tournament Category not found with id: " + entity.getCategoryId());
        }

        TournamentType updated = tournamentDAO.updateTournamentType(id, entity);
        if (updated == null) {
            throw new RuntimeException("Failed to update Tournament Type with id: " + id);
        }
        return updated;
    }

    @Override
    public boolean deleteTournamentType(Integer id) {
        requireValidId(id, "tournament type id");

        TournamentType existing = tournamentDAO.getTournamentTypeById(id);
        if (existing == null) {
            throw new RuntimeException("Tournament Type not found with id: " + id);
        }

        return tournamentDAO.deleteTournamentType(id);
    }

    // ==========================================================
    // Tournament
    // ==========================================================

    private void validateTournamentFields(Tournament entity) {
        requireNonBlank(entity.getName(), "Tournament name");
        requireNotNull(entity.getOrganizerId(), "Organizer id");
        requireNotNull(entity.getCategoryId(), "Category id");
        requireNotNull(entity.getTournamentTypeId(), "Tournament type id");
        requireNotNull(entity.getRegistrationStartDate(), "Registration start date");
        requireNotNull(entity.getRegistrationEndDate(), "Registration end date");
        requireNotNull(entity.getTournamentStartDate(), "Tournament start date");
        requireNotNull(entity.getTournamentEndDate(), "Tournament end date");
        requirePositive(entity.getMaximumTeams(), "Maximum teams");
        requirePositive(entity.getMaximumPlayersPerTeam(), "Maximum players per team");
        requireNonBlank(entity.getStatus(), "Status");

        if (tournamentDAO.getTournamentCategoryById(entity.getCategoryId()) == null) {
            throw new RuntimeException("Tournament Category not found with id: " + entity.getCategoryId());
        }
        if (tournamentDAO.getTournamentTypeById(entity.getTournamentTypeId()) == null) {
            throw new RuntimeException("Tournament Type not found with id: " + entity.getTournamentTypeId());
        }

        if (!entity.getRegistrationStartDate().isBefore(entity.getRegistrationEndDate())) {
            throw new IllegalArgumentException("Registration start date must be before registration end date");
        }
        if (!entity.getTournamentStartDate().isBefore(entity.getTournamentEndDate())) {
            throw new IllegalArgumentException("Tournament start date must be before tournament end date");
        }
        if (entity.getRegistrationEndDate().isAfter(entity.getTournamentStartDate())) {
            throw new IllegalArgumentException("Registration must close on or before the tournament start date");
        }
        if (entity.getEntryFee() != null) {
            requireNonNegative(entity.getEntryFee(), "Entry fee");
        }
    }

    @Override
    public Tournament createTournament(Tournament entity) {
        requireEntity(entity, "Tournament");
        validateTournamentFields(entity);

        if (entity.getId() != null) {
            Tournament existing = tournamentDAO.getTournamentById(entity.getId());
            if (existing != null) {
                throw new RuntimeException("Tournament already exists with id: " + entity.getId());
            }
        }

        Tournament created = tournamentDAO.createTournament(entity);
        if (created == null) {
            throw new RuntimeException("Failed to create Tournament");
        }
        return created;
    }

    @Override
    public Tournament getTournamentById(Integer id) {
        requireValidId(id, "tournament id");

        Tournament tournament = tournamentDAO.getTournamentById(id);
        if (tournament == null) {
            throw new RuntimeException("Tournament not found with id: " + id);
        }
        return tournament;
    }

    @Override
    public List<Tournament> getAllTournaments() {
        return tournamentDAO.getAllTournaments();
    }

    @Override
    public Tournament updateTournament(Integer id, Tournament entity) {
        requireValidId(id, "tournament id");
        requireEntity(entity, "Tournament");

        Tournament existing = tournamentDAO.getTournamentById(id);
        if (existing == null) {
            throw new RuntimeException("Tournament not found with id: " + id);
        }

        validateTournamentFields(entity);

        Tournament updated = tournamentDAO.updateTournament(id, entity);
        if (updated == null) {
            throw new RuntimeException("Failed to update Tournament with id: " + id);
        }
        return updated;
    }

    @Override
    public boolean deleteTournament(Integer id) {
        requireValidId(id, "tournament id");

        Tournament existing = tournamentDAO.getTournamentById(id);
        if (existing == null) {
            throw new RuntimeException("Tournament not found with id: " + id);
        }

        return tournamentDAO.deleteTournament(id);
    }

    // ==========================================================
    // RulesCategory
    // ==========================================================

    @Override
    public RulesCategory createRulesCategory(RulesCategory entity) {
        requireEntity(entity, "RulesCategory");
        requireNonBlank(entity.getCategoryName(), "Category name");

        if (entity.getId() != null) {
            RulesCategory existing = tournamentDAO.getRulesCategoryById(entity.getId());
            if (existing != null) {
                throw new RuntimeException("Rules Category already exists with id: " + entity.getId());
            }
        }

        RulesCategory created = tournamentDAO.createRulesCategory(entity);
        if (created == null) {
            throw new RuntimeException("Failed to create Rules Category");
        }
        return created;
    }

    @Override
    public RulesCategory getRulesCategoryById(Integer id) {
        requireValidId(id, "rules category id");

        RulesCategory category = tournamentDAO.getRulesCategoryById(id);
        if (category == null) {
            throw new RuntimeException("Rules Category not found with id: " + id);
        }
        return category;
    }

    @Override
    public List<RulesCategory> getAllRulesCategorys() {
        return tournamentDAO.getAllRulesCategorys();
    }

    @Override
    public RulesCategory updateRulesCategory(Integer id, RulesCategory entity) {
        requireValidId(id, "rules category id");
        requireEntity(entity, "RulesCategory");

        RulesCategory existing = tournamentDAO.getRulesCategoryById(id);
        if (existing == null) {
            throw new RuntimeException("Rules Category not found with id: " + id);
        }

        requireNonBlank(entity.getCategoryName(), "Category name");

        RulesCategory updated = tournamentDAO.updateRulesCategory(id, entity);
        if (updated == null) {
            throw new RuntimeException("Failed to update Rules Category with id: " + id);
        }
        return updated;
    }

    @Override
    public boolean deleteRulesCategory(Integer id) {
        requireValidId(id, "rules category id");

        RulesCategory existing = tournamentDAO.getRulesCategoryById(id);
        if (existing == null) {
            throw new RuntimeException("Rules Category not found with id: " + id);
        }

        return tournamentDAO.deleteRulesCategory(id);
    }

    // ==========================================================
    // TournamentRule
    // ==========================================================

    private void validateTournamentRuleFields(TournamentRule entity) {
        requireNotNull(entity.getTournamentId(), "Tournament id");
        requireNotNull(entity.getCategoryId(), "Rules category id");
        requireNonBlank(entity.getRuleText(), "Rule text");

        if (tournamentDAO.getTournamentById(entity.getTournamentId()) == null) {
            throw new RuntimeException("Tournament not found with id: " + entity.getTournamentId());
        }
        if (tournamentDAO.getRulesCategoryById(entity.getCategoryId()) == null) {
            throw new RuntimeException("Rules Category not found with id: " + entity.getCategoryId());
        }
    }

    @Override
    public TournamentRule createTournamentRule(TournamentRule entity) {
        requireEntity(entity, "TournamentRule");
        validateTournamentRuleFields(entity);

        if (entity.getId() != null) {
            TournamentRule existing = tournamentDAO.getTournamentRuleById(entity.getId());
            if (existing != null) {
                throw new RuntimeException("Tournament Rule already exists with id: " + entity.getId());
            }
        }

        TournamentRule created = tournamentDAO.createTournamentRule(entity);
        if (created == null) {
            throw new RuntimeException("Failed to create Tournament Rule");
        }
        return created;
    }

    @Override
    public TournamentRule getTournamentRuleById(Integer id) {
        requireValidId(id, "tournament rule id");

        TournamentRule rule = tournamentDAO.getTournamentRuleById(id);
        if (rule == null) {
            throw new RuntimeException("Tournament Rule not found with id: " + id);
        }
        return rule;
    }

    @Override
    public List<TournamentRule> getAllTournamentRules() {
        return tournamentDAO.getAllTournamentRules();
    }

    @Override
    public TournamentRule updateTournamentRule(Integer id, TournamentRule entity) {
        requireValidId(id, "tournament rule id");
        requireEntity(entity, "TournamentRule");

        TournamentRule existing = tournamentDAO.getTournamentRuleById(id);
        if (existing == null) {
            throw new RuntimeException("Tournament Rule not found with id: " + id);
        }

        validateTournamentRuleFields(entity);

        TournamentRule updated = tournamentDAO.updateTournamentRule(id, entity);
        if (updated == null) {
            throw new RuntimeException("Failed to update Tournament Rule with id: " + id);
        }
        return updated;
    }

    @Override
    public boolean deleteTournamentRule(Integer id) {
        requireValidId(id, "tournament rule id");

        TournamentRule existing = tournamentDAO.getTournamentRuleById(id);
        if (existing == null) {
            throw new RuntimeException("Tournament Rule not found with id: " + id);
        }

        return tournamentDAO.deleteTournamentRule(id);
    }

    // ==========================================================
    // PrizeCategory
    // ==========================================================

    @Override
    public PrizeCategory createPrizeCategory(PrizeCategory entity) {
        requireEntity(entity, "PrizeCategory");
        requireNonBlank(entity.getName(), "Prize category name");

        if (entity.getId() != null) {
            PrizeCategory existing = tournamentDAO.getPrizeCategoryById(entity.getId());
            if (existing != null) {
                throw new RuntimeException("Prize Category already exists with id: " + entity.getId());
            }
        }

        PrizeCategory created = tournamentDAO.createPrizeCategory(entity);
        if (created == null) {
            throw new RuntimeException("Failed to create Prize Category");
        }
        return created;
    }

    @Override
    public PrizeCategory getPrizeCategoryById(Integer id) {
        requireValidId(id, "prize category id");

        PrizeCategory category = tournamentDAO.getPrizeCategoryById(id);
        if (category == null) {
            throw new RuntimeException("Prize Category not found with id: " + id);
        }
        return category;
    }

    @Override
    public List<PrizeCategory> getAllPrizeCategorys() {
        return tournamentDAO.getAllPrizeCategorys();
    }

    @Override
    public PrizeCategory updatePrizeCategory(Integer id, PrizeCategory entity) {
        requireValidId(id, "prize category id");
        requireEntity(entity, "PrizeCategory");

        PrizeCategory existing = tournamentDAO.getPrizeCategoryById(id);
        if (existing == null) {
            throw new RuntimeException("Prize Category not found with id: " + id);
        }

        requireNonBlank(entity.getName(), "Prize category name");

        PrizeCategory updated = tournamentDAO.updatePrizeCategory(id, entity);
        if (updated == null) {
            throw new RuntimeException("Failed to update Prize Category with id: " + id);
        }
        return updated;
    }

    @Override
    public boolean deletePrizeCategory(Integer id) {
        requireValidId(id, "prize category id");

        PrizeCategory existing = tournamentDAO.getPrizeCategoryById(id);
        if (existing == null) {
            throw new RuntimeException("Prize Category not found with id: " + id);
        }

        return tournamentDAO.deletePrizeCategory(id);
    }

    // ==========================================================
    // TournamentPrize
    // ==========================================================

    private void validateTournamentPrizeFields(TournamentPrize entity) {
        requireNotNull(entity.getTournamentId(), "Tournament id");
        requireNotNull(entity.getPrizeCategoryId(), "Prize category id");
        requireNonBlank(entity.getPositionName(), "Position name");
        requirePositive(entity.getRankOrder(), "Rank order");

        if (tournamentDAO.getTournamentById(entity.getTournamentId()) == null) {
            throw new RuntimeException("Tournament not found with id: " + entity.getTournamentId());
        }
        if (tournamentDAO.getPrizeCategoryById(entity.getPrizeCategoryId()) == null) {
            throw new RuntimeException("Prize Category not found with id: " + entity.getPrizeCategoryId());
        }
        if (entity.getPrizeAmount() != null) {
            requireNonNegative(entity.getPrizeAmount(), "Prize amount");
        }
    }

    @Override
    public TournamentPrize createTournamentPrize(TournamentPrize entity) {
        requireEntity(entity, "TournamentPrize");
        validateTournamentPrizeFields(entity);

        if (entity.getId() != null) {
            TournamentPrize existing = tournamentDAO.getTournamentPrizeById(entity.getId());
            if (existing != null) {
                throw new RuntimeException("Tournament Prize already exists with id: " + entity.getId());
            }
        }

        TournamentPrize created = tournamentDAO.createTournamentPrize(entity);
        if (created == null) {
            throw new RuntimeException("Failed to create Tournament Prize");
        }
        return created;
    }

    @Override
    public TournamentPrize getTournamentPrizeById(Integer id) {
        requireValidId(id, "tournament prize id");

        TournamentPrize prize = tournamentDAO.getTournamentPrizeById(id);
        if (prize == null) {
            throw new RuntimeException("Tournament Prize not found with id: " + id);
        }
        return prize;
    }

    @Override
    public List<TournamentPrize> getAllTournamentPrizes() {
        return tournamentDAO.getAllTournamentPrizes();
    }

    @Override
    public TournamentPrize updateTournamentPrize(Integer id, TournamentPrize entity) {
        requireValidId(id, "tournament prize id");
        requireEntity(entity, "TournamentPrize");

        TournamentPrize existing = tournamentDAO.getTournamentPrizeById(id);
        if (existing == null) {
            throw new RuntimeException("Tournament Prize not found with id: " + id);
        }

        validateTournamentPrizeFields(entity);

        TournamentPrize updated = tournamentDAO.updateTournamentPrize(id, entity);
        if (updated == null) {
            throw new RuntimeException("Failed to update Tournament Prize with id: " + id);
        }
        return updated;
    }

    @Override
    public boolean deleteTournamentPrize(Integer id) {
        requireValidId(id, "tournament prize id");

        TournamentPrize existing = tournamentDAO.getTournamentPrizeById(id);
        if (existing == null) {
            throw new RuntimeException("Tournament Prize not found with id: " + id);
        }

        return tournamentDAO.deleteTournamentPrize(id);
    }

    // ==========================================================
    // TournamentRegistration
    // ==========================================================

    private void validateTournamentRegistrationFields(TournamentRegistration entity) {
        requireNotNull(entity.getTournamentId(), "Tournament id");
        requirePositive(entity.getTeamId(), "Team id");
        requireNotNull(entity.getRegistrationStatusId(), "Registration status id");

        if (tournamentDAO.getTournamentById(entity.getTournamentId()) == null) {
            throw new RuntimeException("Tournament not found with id: " + entity.getTournamentId());
        }
    }

    @Override
    public TournamentRegistration createTournamentRegistration(TournamentRegistration entity) {
        requireEntity(entity, "TournamentRegistration");
        validateTournamentRegistrationFields(entity);

        if (entity.getId() != null) {
            TournamentRegistration existing = tournamentDAO.getTournamentRegistrationById(entity.getId());
            if (existing != null) {
                throw new RuntimeException("Tournament Registration already exists with id: " + entity.getId());
            }
        }

        TournamentRegistration created = tournamentDAO.createTournamentRegistration(entity);
        if (created == null) {
            throw new RuntimeException("Failed to create Tournament Registration");
        }
        return created;
    }

    @Override
    public TournamentRegistration getTournamentRegistrationById(Integer id) {
        requireValidId(id, "tournament registration id");

        TournamentRegistration registration = tournamentDAO.getTournamentRegistrationById(id);
        if (registration == null) {
            throw new RuntimeException("Tournament Registration not found with id: " + id);
        }
        return registration;
    }

    @Override
    public List<TournamentRegistration> getAllTournamentRegistrations() {
        return tournamentDAO.getAllTournamentRegistrations();
    }

    @Override
    public TournamentRegistration updateTournamentRegistration(Integer id, TournamentRegistration entity) {
        requireValidId(id, "tournament registration id");
        requireEntity(entity, "TournamentRegistration");

        TournamentRegistration existing = tournamentDAO.getTournamentRegistrationById(id);
        if (existing == null) {
            throw new RuntimeException("Tournament Registration not found with id: " + id);
        }

        validateTournamentRegistrationFields(entity);

        TournamentRegistration updated = tournamentDAO.updateTournamentRegistration(id, entity);
        if (updated == null) {
            throw new RuntimeException("Failed to update Tournament Registration with id: " + id);
        }
        return updated;
    }

    @Override
    public boolean deleteTournamentRegistration(Integer id) {
        requireValidId(id, "tournament registration id");

        TournamentRegistration existing = tournamentDAO.getTournamentRegistrationById(id);
        if (existing == null) {
            throw new RuntimeException("Tournament Registration not found with id: " + id);
        }

        return tournamentDAO.deleteTournamentRegistration(id);
    }

    // ==========================================================
    // TournamentRegistrationPayment
    // ==========================================================

    private void validateTournamentRegistrationPaymentFields(TournamentRegistrationPayment entity) {
        requireNotNull(entity.getRegistrationId(), "Registration id");
        requireNotNull(entity.getTournamentId(), "Tournament id");
        requirePositive(entity.getParticipantId(), "Participant id");
        requirePositive(entity.getAmount(), "Amount");
        requireNonBlank(entity.getPaymentStatus(), "Payment status");

        if (tournamentDAO.getTournamentRegistrationById(entity.getRegistrationId()) == null) {
            throw new RuntimeException("Tournament Registration not found with id: " + entity.getRegistrationId());
        }
        if (tournamentDAO.getTournamentById(entity.getTournamentId()) == null) {
            throw new RuntimeException("Tournament not found with id: " + entity.getTournamentId());
        }
    }

    @Override
    public TournamentRegistrationPayment createTournamentRegistrationPayment(TournamentRegistrationPayment entity) {
        requireEntity(entity, "TournamentRegistrationPayment");
        validateTournamentRegistrationPaymentFields(entity);

        if (entity.getId() != null) {
            TournamentRegistrationPayment existing = tournamentDAO.getTournamentRegistrationPaymentById(entity.getId());
            if (existing != null) {
                throw new RuntimeException("Tournament Registration Payment already exists with id: " + entity.getId());
            }
        }

        TournamentRegistrationPayment created = tournamentDAO.createTournamentRegistrationPayment(entity);
        if (created == null) {
            throw new RuntimeException("Failed to create Tournament Registration Payment");
        }
        return created;
    }

    @Override
    public TournamentRegistrationPayment getTournamentRegistrationPaymentById(Integer id) {
        requireValidId(id, "tournament registration payment id");

        TournamentRegistrationPayment payment = tournamentDAO.getTournamentRegistrationPaymentById(id);
        if (payment == null) {
            throw new RuntimeException("Tournament Registration Payment not found with id: " + id);
        }
        return payment;
    }

    @Override
    public List<TournamentRegistrationPayment> getAllTournamentRegistrationPayments() {
        return tournamentDAO.getAllTournamentRegistrationPayments();
    }

    @Override
    public TournamentRegistrationPayment updateTournamentRegistrationPayment(Integer id, TournamentRegistrationPayment entity) {
        requireValidId(id, "tournament registration payment id");
        requireEntity(entity, "TournamentRegistrationPayment");

        TournamentRegistrationPayment existing = tournamentDAO.getTournamentRegistrationPaymentById(id);
        if (existing == null) {
            throw new RuntimeException("Tournament Registration Payment not found with id: " + id);
        }

        validateTournamentRegistrationPaymentFields(entity);

        TournamentRegistrationPayment updated = tournamentDAO.updateTournamentRegistrationPayment(id, entity);
        if (updated == null) {
            throw new RuntimeException("Failed to update Tournament Registration Payment with id: " + id);
        }
        return updated;
    }

    @Override
    public boolean deleteTournamentRegistrationPayment(Integer id) {
        requireValidId(id, "tournament registration payment id");

        TournamentRegistrationPayment existing = tournamentDAO.getTournamentRegistrationPaymentById(id);
        if (existing == null) {
            throw new RuntimeException("Tournament Registration Payment not found with id: " + id);
        }

        return tournamentDAO.deleteTournamentRegistrationPayment(id);
    }

    // ==========================================================
    // TournamentAnnouncement
    // ==========================================================

    private void validateTournamentAnnouncementFields(TournamentAnnouncement entity) {
        requireNotNull(entity.getTournamentId(), "Tournament id");
        requireNonBlank(entity.getTitle(), "Title");
        requireNonBlank(entity.getContent(), "Content");

        if (tournamentDAO.getTournamentById(entity.getTournamentId()) == null) {
            throw new RuntimeException("Tournament not found with id: " + entity.getTournamentId());
        }
    }

    @Override
    public TournamentAnnouncement createTournamentAnnouncement(TournamentAnnouncement entity) {
        requireEntity(entity, "TournamentAnnouncement");
        validateTournamentAnnouncementFields(entity);

        if (entity.getId() != null) {
            TournamentAnnouncement existing = tournamentDAO.getTournamentAnnouncementById(entity.getId());
            if (existing != null) {
                throw new RuntimeException("Tournament Announcement already exists with id: " + entity.getId());
            }
        }

        TournamentAnnouncement created = tournamentDAO.createTournamentAnnouncement(entity);
        if (created == null) {
            throw new RuntimeException("Failed to create Tournament Announcement");
        }
        return created;
    }

    @Override
    public TournamentAnnouncement getTournamentAnnouncementById(Integer id) {
        requireValidId(id, "tournament announcement id");

        TournamentAnnouncement announcement = tournamentDAO.getTournamentAnnouncementById(id);
        if (announcement == null) {
            throw new RuntimeException("Tournament Announcement not found with id: " + id);
        }
        return announcement;
    }

    @Override
    public List<TournamentAnnouncement> getAllTournamentAnnouncements() {
        return tournamentDAO.getAllTournamentAnnouncements();
    }

    @Override
    public TournamentAnnouncement updateTournamentAnnouncement(Integer id, TournamentAnnouncement entity) {
        requireValidId(id, "tournament announcement id");
        requireEntity(entity, "TournamentAnnouncement");

        TournamentAnnouncement existing = tournamentDAO.getTournamentAnnouncementById(id);
        if (existing == null) {
            throw new RuntimeException("Tournament Announcement not found with id: " + id);
        }

        validateTournamentAnnouncementFields(entity);

        TournamentAnnouncement updated = tournamentDAO.updateTournamentAnnouncement(id, entity);
        if (updated == null) {
            throw new RuntimeException("Failed to update Tournament Announcement with id: " + id);
        }
        return updated;
    }

    @Override
    public boolean deleteTournamentAnnouncement(Integer id) {
        requireValidId(id, "tournament announcement id");

        TournamentAnnouncement existing = tournamentDAO.getTournamentAnnouncementById(id);
        if (existing == null) {
            throw new RuntimeException("Tournament Announcement not found with id: " + id);
        }

        return tournamentDAO.deleteTournamentAnnouncement(id);
    }

    // ==========================================================
    // TournamentFAQ
    // ==========================================================

    private void validateTournamentFAQFields(TournamentFAQ entity) {
        requireNotNull(entity.getTournamentId(), "Tournament id");
        requireNonBlank(entity.getQuestion(), "Question");
        requireNonBlank(entity.getStatus(), "Status");

        if (tournamentDAO.getTournamentById(entity.getTournamentId()) == null) {
            throw new RuntimeException("Tournament not found with id: " + entity.getTournamentId());
        }
    }

    @Override
    public TournamentFAQ createTournamentFAQ(TournamentFAQ entity) {
        requireEntity(entity, "TournamentFAQ");
        validateTournamentFAQFields(entity);

        if (entity.getId() != null) {
            TournamentFAQ existing = tournamentDAO.getTournamentFAQById(entity.getId());
            if (existing != null) {
                throw new RuntimeException("Tournament FAQ already exists with id: " + entity.getId());
            }
        }

        TournamentFAQ created = tournamentDAO.createTournamentFAQ(entity);
        if (created == null) {
            throw new RuntimeException("Failed to create Tournament FAQ");
        }
        return created;
    }

    @Override
    public TournamentFAQ getTournamentFAQById(Integer id) {
        requireValidId(id, "tournament FAQ id");

        TournamentFAQ faq = tournamentDAO.getTournamentFAQById(id);
        if (faq == null) {
            throw new RuntimeException("Tournament FAQ not found with id: " + id);
        }
        return faq;
    }

    @Override
    public List<TournamentFAQ> getAllTournamentFAQs() {
        return tournamentDAO.getAllTournamentFAQs();
    }

    @Override
    public TournamentFAQ updateTournamentFAQ(Integer id, TournamentFAQ entity) {
        requireValidId(id, "tournament FAQ id");
        requireEntity(entity, "TournamentFAQ");

        TournamentFAQ existing = tournamentDAO.getTournamentFAQById(id);
        if (existing == null) {
            throw new RuntimeException("Tournament FAQ not found with id: " + id);
        }

        validateTournamentFAQFields(entity);

        TournamentFAQ updated = tournamentDAO.updateTournamentFAQ(id, entity);
        if (updated == null) {
            throw new RuntimeException("Failed to update Tournament FAQ with id: " + id);
        }
        return updated;
    }

    @Override
    public boolean deleteTournamentFAQ(Integer id) {
        requireValidId(id, "tournament FAQ id");

        TournamentFAQ existing = tournamentDAO.getTournamentFAQById(id);
        if (existing == null) {
            throw new RuntimeException("Tournament FAQ not found with id: " + id);
        }

        return tournamentDAO.deleteTournamentFAQ(id);
    }

    // ==========================================================
    // RoundDetails
    // ==========================================================

    private void validateRoundDetailsFields(RoundDetails entity) {
        requireNotNull(entity.getTournamentId(), "Tournament id");
        requireNonBlank(entity.getRoundName(), "Round name");
        requirePositive(entity.getMaximumParticipants(), "Maximum participants");
        requireNonNegative(entity.getQualifyingCount(), "Qualifying count");

        if (tournamentDAO.getTournamentById(entity.getTournamentId()) == null) {
            throw new RuntimeException("Tournament not found with id: " + entity.getTournamentId());
        }
        if (entity.getQualifyingCount() > entity.getMaximumParticipants()) {
            throw new IllegalArgumentException("Qualifying count cannot exceed maximum participants");
        }
    }

    @Override
    public RoundDetails createRoundDetails(RoundDetails entity) {
        requireEntity(entity, "RoundDetails");
        validateRoundDetailsFields(entity);

        if (entity.getId() != null) {
            RoundDetails existing = tournamentDAO.getRoundDetailsById(entity.getId());
            if (existing != null) {
                throw new RuntimeException("Round Details already exists with id: " + entity.getId());
            }
        }

        RoundDetails created = tournamentDAO.createRoundDetails(entity);
        if (created == null) {
            throw new RuntimeException("Failed to create Round Details");
        }
        return created;
    }

    @Override
    public RoundDetails getRoundDetailsById(Integer id) {
        requireValidId(id, "round id");

        RoundDetails round = tournamentDAO.getRoundDetailsById(id);
        if (round == null) {
            throw new RuntimeException("Round Details not found with id: " + id);
        }
        return round;
    }

    @Override
    public List<RoundDetails> getAllRoundDetails() {
        return tournamentDAO.getAllRoundDetails();
    }

    @Override
    public RoundDetails updateRoundDetails(Integer id, RoundDetails entity) {
        requireValidId(id, "round id");
        requireEntity(entity, "RoundDetails");

        RoundDetails existing = tournamentDAO.getRoundDetailsById(id);
        if (existing == null) {
            throw new RuntimeException("Round Details not found with id: " + id);
        }

        validateRoundDetailsFields(entity);

        RoundDetails updated = tournamentDAO.updateRoundDetails(id, entity);
        if (updated == null) {
            throw new RuntimeException("Failed to update Round Details with id: " + id);
        }
        return updated;
    }

    @Override
    public boolean deleteRoundDetails(Integer id) {
        requireValidId(id, "round id");

        RoundDetails existing = tournamentDAO.getRoundDetailsById(id);
        if (existing == null) {
            throw new RuntimeException("Round Details not found with id: " + id);
        }

        return tournamentDAO.deleteRoundDetails(id);
    }

    // ==========================================================
    // MatchDetails
    // ==========================================================

    private void validateMatchDetailsFields(MatchDetails entity) {
        requireNotNull(entity.getRoundId(), "Round id");
        requireNotNull(entity.getStartTime(), "Start time");
        requireNotNull(entity.getEndTime(), "End time");
        requireNonBlank(entity.getStatus(), "Status");

        if (tournamentDAO.getRoundDetailsById(entity.getRoundId()) == null) {
            throw new RuntimeException("Round Details not found with id: " + entity.getRoundId());
        }
        if (!entity.getStartTime().isBefore(entity.getEndTime())) {
            throw new IllegalArgumentException("Start time must be before end time");
        }
    }

    @Override
    public MatchDetails createMatchDetails(MatchDetails entity) {
        requireEntity(entity, "MatchDetails");
        validateMatchDetailsFields(entity);

        if (entity.getId() != null) {
            MatchDetails existing = tournamentDAO.getMatchDetailsById(entity.getId());
            if (existing != null) {
                throw new RuntimeException("Match Details already exists with id: " + entity.getId());
            }
        }

        MatchDetails created = tournamentDAO.createMatchDetails(entity);
        if (created == null) {
            throw new RuntimeException("Failed to create Match Details");
        }
        return created;
    }

    @Override
    public MatchDetails getMatchDetailsById(Integer id) {
        requireValidId(id, "match id");

        MatchDetails match = tournamentDAO.getMatchDetailsById(id);
        if (match == null) {
            throw new RuntimeException("Match Details not found with id: " + id);
        }
        return match;
    }

    @Override
    public List<MatchDetails> getAllMatchDetails() {
        return tournamentDAO.getAllMatchDetails();
    }

    @Override
    public MatchDetails updateMatchDetails(Integer id, MatchDetails entity) {
        requireValidId(id, "match id");
        requireEntity(entity, "MatchDetails");

        MatchDetails existing = tournamentDAO.getMatchDetailsById(id);
        if (existing == null) {
            throw new RuntimeException("Match Details not found with id: " + id);
        }

        validateMatchDetailsFields(entity);

        MatchDetails updated = tournamentDAO.updateMatchDetails(id, entity);
        if (updated == null) {
            throw new RuntimeException("Failed to update Match Details with id: " + id);
        }
        return updated;
    }

    @Override
    public boolean deleteMatchDetails(Integer id) {
        requireValidId(id, "match id");

        MatchDetails existing = tournamentDAO.getMatchDetailsById(id);
        if (existing == null) {
            throw new RuntimeException("Match Details not found with id: " + id);
        }

        return tournamentDAO.deleteMatchDetails(id);
    }

    // ==========================================================
    // MatchParticipants
    // ==========================================================

    private void validateMatchParticipantsFields(MatchParticipants entity) {
        requireNotNull(entity.getMatchId(), "Match id");
        requirePositive(entity.getTeamId(), "Team id");
        requireNonBlank(entity.getStatus(), "Status");

        if (tournamentDAO.getMatchDetailsById(entity.getMatchId()) == null) {
            throw new RuntimeException("Match Details not found with id: " + entity.getMatchId());
        }
    }

    @Override
    public MatchParticipants createMatchParticipants(MatchParticipants entity) {
        requireEntity(entity, "MatchParticipants");
        validateMatchParticipantsFields(entity);

        if (entity.getId() != null) {
            MatchParticipants existing = tournamentDAO.getMatchParticipantsById(entity.getId());
            if (existing != null) {
                throw new RuntimeException("Match Participants already exists with id: " + entity.getId());
            }
        }

        MatchParticipants created = tournamentDAO.createMatchParticipants(entity);
        if (created == null) {
            throw new RuntimeException("Failed to create Match Participants");
        }
        return created;
    }

    @Override
    public MatchParticipants getMatchParticipantsById(Integer id) {
        requireValidId(id, "match participant id");

        MatchParticipants participant = tournamentDAO.getMatchParticipantsById(id);
        if (participant == null) {
            throw new RuntimeException("Match Participants not found with id: " + id);
        }
        return participant;
    }

    @Override
    public List<MatchParticipants> getAllMatchParticipants() {
        return tournamentDAO.getAllMatchParticipants();
    }

    @Override
    public MatchParticipants updateMatchParticipants(Integer id, MatchParticipants entity) {
        requireValidId(id, "match participant id");
        requireEntity(entity, "MatchParticipants");

        MatchParticipants existing = tournamentDAO.getMatchParticipantsById(id);
        if (existing == null) {
            throw new RuntimeException("Match Participants not found with id: " + id);
        }

        validateMatchParticipantsFields(entity);

        MatchParticipants updated = tournamentDAO.updateMatchParticipants(id, entity);
        if (updated == null) {
            throw new RuntimeException("Failed to update Match Participants with id: " + id);
        }
        return updated;
    }

    @Override
    public boolean deleteMatchParticipants(Integer id) {
        requireValidId(id, "match participant id");

        MatchParticipants existing = tournamentDAO.getMatchParticipantsById(id);
        if (existing == null) {
            throw new RuntimeException("Match Participants not found with id: " + id);
        }

        return tournamentDAO.deleteMatchParticipants(id);
    }

}
