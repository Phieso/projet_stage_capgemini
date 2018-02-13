'use strict';
const mongoose = require('mongoose'),
      bcrypt = require('bcrypt'),
      Schema = mongoose.Schema;

//TODO add validators cf mongoose Validators
var UserSchema = new Schema({
    first_name: {
        type: String,
        required: true
    },

    last_name: {
        type: String,
        required: true
    },

    hash_password: {
        type: String,
        require: true
    },

    adress: {
        type: String
    },

    phone_number: {
        type: String,
        required: false
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    profile_picture_url: {
        type: String
    },

    creation_date: {
        type: Date,
        default: Date.now()
    },

    last_sign_in_date: {
        type: Date
    },

    user_role: {
        type: [{
            type: String,
            enum: ['user', 'admin']
        }],
        default: ['user']
    }
});

UserSchema.methods.comparePassword = function(password) {
    return bcrypt.compareSync(password, this.hash_password);
}

// Personnes Internes à AFJ
var PersIntSchema = new Schema({
    PersInt_ID: {
        type: String,
        required: true,
        unique: true
    },
    
    full_name: {
        first_name: {
            type: String,
            required: true
        },

        last_name: {
            type: String,
        }
    },

    hash_password: {
        type: String
    },

    email: {
        type: String,
    },
    
    phone_number: {
        type: String
    },

    profile_picture_url: {
        type: String
    },

    user_role: {
        type: [{
            type: String,
            enum: ['user', 'modo', 'admin']
        }],
        default: ['user']
    }
});

/* 
// Structures Externes
var StructSchema = new Schema({
    Nom_Struct: {
        type: String,
        required: true,
        unique: true
    },
    
    type_structure: {
        type: String,
        required: true
    },

    email_structure: {
        type: String
    },
    
    phone_number: {
        type: String
    },

    nom_referent: {
        type: String
    }
});

// Personnes Externes
var PersExtSchema = new Schema({
    PersExt_Name: {
        first_name: {
            type: String,
            required: true
        },

        last_name: {
            type: String,
        }
    },

    Nom_Struct: {
        type: String
    },

    email: {
        type: String,
    },
    
    phone_number: {
        type: String
    }
});


// Table de Base de la Victime regroupant les id des Eval 
var VictimSchema = new Schema({
    Victim_ID: {
        type: String,
        required: true,
        unique: true
    },
    
    Orient_ID: {
        type: String,
        required: true,
        unique: true
    },
    
    Eval_ID: {
        type: String,
        required: true,
        unique: true
    },
    
    Admiss_ID: {
        type: String,
        required: true,
        unique: true
    },
    
    Sortie_ID: {
        type: String,
        required: true,
        unique: true
    }
});

// 6 flexibles data tables
var IdentitySchema = new Schema({
    Victim_ID: {
        type: String,
        required: true
    },
    
    nom_column: {
        type: String,
        required: true
    },
    
    data_date: {
        type: Date
    },
    
    data_int: {
        type: Number
    },
    
    data_string: {
        type: String
    },
    
    time: {
    type: Date,
    required: true
    }
});

var SantePhySchema = new Schema({
    Victim_ID: {
        type: String,
        required: true
    },
    
    nom_column: {
        type: String,
        required: true
    },
    
    data_date: {
        type: Date
    },
    
    data_int: {
        type: Number
    },
    
    data_string: {
        type: String
    },
    
    time: {
    type: Date,
    required: true
    }
});

var SantePsySchema = new Schema({
    Victim_ID: {
        type: String,
        required: true
    },
    
    nom_column: {
        type: String,
        required: true
    },
    
    data_date: {
        type: Date
    },
    
    data_int: {
        type: Number
    },
    
    data_string: {
        type: String
    },
    
    time: {
    type: Date,
    required: true
    }
});

var AdministratifSchema = new Schema({
    Victim_ID: {
        type: String,
        required: true
    },
    
    nom_column: {
        type: String,
        required: true
    },
    
    data_date: {
        type: Date
    },
    
    data_int: {
        type: Number
    },
    
    data_string: {
        type: String
    },
    
    time: {
    type: Date,
    required: true
    }
});

var EducationSchema = new Schema({
    Victim_ID: {
        type: String,
        required: true
    },
    
    nom_column: {
        type: String,
        required: true
    },
    
    data_date: {
        type: Date
    },
    
    data_int: {
        type: Number
    },
    
    data_string: {
        type: String
    },
    
    time: {
    type: Date,
    required: true
    }
});

var JuridiqueSchema = new Schema({
    Victim_ID: {
        type: String,
        required: true
    },
    
    nom_column: {
        type: String,
        required: true
    },
    
    data_date: {
        type: Date
    },
    
    data_int: {
        type: Number
    },
    
    data_string: {
        type: String
    },
    
    time: {
    type: Date,
    required: true
    }
});

// Tables à données fixes pour les Victimes
var OrientSchema = new Schema({
    Victim_ID: {
        type: String,
        required: true,
        unique: true
    },
    
    Orient_ID: {
        type: String,
        required: true,
        unique: true
    },
    
    Nom_Struct: {
        type: String,
        required: true
    },
    
    Nom_PersExt: {
        type: String
    },
    
    contexte_orientation: {
        type: String
    },
    
    demande_orientation: {
        type: String
    },
    
    commentaires_orientation: {
        type: String
    },
    
    date_orientation: {
        type: Date
    },
                              
    suivie_depuis: {
        type: String
    },
                              
    autres_contacts: {
        type: String
    },
                              
    connue_depuis: {
        type: String
    }
});

var EvalSchema = new Schema({
    Eval_ID: {
        type: String,
        required: true,
        unique: true
    },
    
    Victim_ID: {
        type: String,
        required: true
    },
    
    PersInt_ID: {
        type: String,
        required: true
    },
    
    eval1: {
        date_eval1: {
            type: Date,
            required: true
        },
        
        duree_eval1: {
            type: Number
        },
        
        format_eval1: {
            type: String
        },
    
        nombre_mails: {
            type: Number
        },

        temps_tel: {
            type: Number
        },
        
        reponse_eval1: {
            type: String
        }
    },
    
    eval2: {
        date_eval2: {
            type: Date,
            required: true
        },
        
        lieu_eval2: {
            type: String
        },
        
        venue_victime: {
            type: Boolean
        },
        
        duree_eval2: {
            type: Number
        },
        
        decision_AFJ: {
            type: String
        },

        raison_AFJ: {
            type: String
        },

        decision_victime: {
            type: Boolean
        },

        raison_victime: {
            type: String
        },

        delai_reponse: {
            type: String
        }
    },
                            
    strategie_protection: {
        herberg_foyer: {
            type: Boolean
        },

        eval_approfondie: {
            type: Boolean
        },

        reorientation: {
            type: Boolean
        },

        strategie_intervention: {
            type: Boolean
        }
    }
});

var AdmissionSchema = new Schema({
    Victim_ID: {
        type: String,
        required: true,
        unique: true
    },
    
    Admiss_ID: {
        type: String,
        required: true,
        unique: true
    },
    
    PersInt_ID: {
        type: String,
        required: true
    },

    type_admiss: {
        type: String,
        required: true
    },
                              
    date_admiss: {
        type: Date,
        required: true
    },
    
    lien_autres_residentes: {
        type: String
    },
    
    besoin_interprète: {
        type: Boolean
    },
    
    chambre_avec: {
        type: String
    },
    
    preconisations_nuit: {
        type: String
    },
    
    referent_foyer: {
        type: String
    },
    
    observations_admiss: {
        type: String
    },
    
    securite_admiss: {
        risques: {
            type: String
        },
        
        telephone: {
            type: Boolean
        },
        
        changer_telephone: {
            type: Boolean
        },
        
        appels_ext: {
            type: Boolean
        },
        
        sortie_ext: {
            type: Boolean
        },
        
        craintes: {
            type: Boolean
        },
        
        preconisations_securite: {
            type: String
        }
    },
    
    admin_admiss: {
        domiciliation_admiss: {
            type: String
        },
        
        ressources_admiss: {
            type: String
        },
        
        besoin_kit_vest: {
            type: Boolean
        },
        
        AME_admiss: {
            type: Boolean
        },
        
        CMU_admiss: {
            type: Boolean
        },
        
        situation_admiss: {
            type: String
        },
        
        demande_SIAO: {
            type: String
        },
        
        procedure_asile_admiss: {
            type: String
        },
        
        etapes_asile_admiss: {
            type: String
        },
        
        suivi_social_anterieur_admiss: {
            type: Boolean
        },
        
        commentaires_admin_admiss: {
            type: String
        }
    },
    
    // I'M here!
    sante_admiss: {
        situation_admin_admiss: {
            type: String
        },
        
        procedure_asile_admiss: {
            type: String
        },
        
        etapes_asile_admiss: {
            type: String
        },
        
        suivi_social_anterieur_admiss: {
            type: Boolean
        }
    },
});

var SortieSchema = new Schema({
    Victim_ID: {
        type: String,
        required: true,
        unique: true
    },
    
    Sortie_ID: {
        type: String,
        required: true,
        unique: true
    },
    
    date_sortie: {
        type: Date
    },
    
    nombre_nuitees: {
        type: Number
    },
    
    situation_administrative: {
        type: String
    },
    
    procedure_asile_sortie: {
        type: String
    },
    
    etapes_asile_sortie: {
        type: String
    },
    
    suivi_social_anterieur_sortie: {
        type: String
    },
    
    eloignement_geographique: {
        type: Boolean
    },
    
    reponse_eloignement: {
        type: String
    }
});

*/

module.exports = mongoose.model('User', UserSchema);
module.exports = mongoose.model('PersInt', PersIntSchema);