sap.ui.define(["./BaseController", "sap/m/MessageBox",    "sap/ui/model/json/JSONModel",
], function (BaseController, MessageBox,JSONModel) {
	"use strict";

	return BaseController.extend("com.myorg.myapp.controller.Main", {
		onInit: function() {
            // Initialize main data model
            var oModel = new JSONModel({
                firstName: "",
                lastName: "",
                email: "",
                age: null
            });
            this.getView().setModel(oModel);
            
            // Initialize validation model
            var oViewModel = new JSONModel({
                firstNameError: false,
                lastNameError: false,
                emailError: false,
                ageError: false
            });
            this.getView().setModel(oViewModel, "viewModel");
        },
        
        // Validation methods
        validateFirstName: function(sFirstName) {
            return sFirstName && sFirstName.trim().length > 0;
        },
        
        validateLastName: function(sLastName) {
            return sLastName && sLastName.trim().length > 0;
        },
        
        validateEmail: function(sEmail) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(sEmail);
        },
        
        validateAge: function(iAge) {
            return iAge >= 18 && iAge <= 120;
        },
        
        onSubmit: function() {
            var oView = this.getView();
            var oModel = oView.getModel();
            var oViewModel = oView.getModel("viewModel");
            
            var sFirstName = oModel.getProperty("/firstName");
            var sLastName = oModel.getProperty("/lastName");
            var sEmail = oModel.getProperty("/email");
            var iAge = oModel.getProperty("/age");
            
            // Reset previous error states
            oViewModel.setProperty("/firstNameError", false);
            oViewModel.setProperty("/lastNameError", false);
            oViewModel.setProperty("/emailError", false);
            oViewModel.setProperty("/ageError", false);
            
            // Perform validations
            var bIsValid = true;
            
            if (!this.validateFirstName(sFirstName)) {
                oViewModel.setProperty("/firstNameError", true);
                bIsValid = false;
            }
            
            if (!this.validateLastName(sLastName)) {
                oViewModel.setProperty("/lastNameError", true);
                bIsValid = false;
            }
            
            if (!this.validateEmail(sEmail)) {
                oViewModel.setProperty("/emailError", true);
                bIsValid = false;
            }
            
            if (iAge && !this.validateAge(iAge)) {
                oViewModel.setProperty("/ageError", true);
                bIsValid = false;
            }
            
            // If all validations pass
            if (bIsValid) {
                // Perform submission logic here
                var oSubmissionData = {
                    firstName: sFirstName,
                    lastName: sLastName,
                    email: sEmail,
                    age: iAge
                };
                
                // Example: Log to console, in real app you'd send to backend
                console.log("Form Submitted:", oSubmissionData);
                
                MessageToast.show("Form submitted successfully!");
                this.onReset();
            }
        },
        
        onReset: function() {
            var oModel = this.getView().getModel();
            var oViewModel = this.getView().getModel("viewModel");
            
            // Reset form data
            oModel.setProperty("/firstName", "");
            oModel.setProperty("/lastName", "");
            oModel.setProperty("/email", "");
            oModel.setProperty("/age", null);
            
            // Reset error states
            oViewModel.setProperty("/firstNameError", false);
            oViewModel.setProperty("/lastNameError", false);
            oViewModel.setProperty("/emailError", false);
            oViewModel.setProperty("/ageError", false);
        }
    });
});
