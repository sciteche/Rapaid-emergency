export const emergencyCategories = [
  {
    id: 'trauma-injuries',
    name: 'Trauma & Injuries',
    emoji: '🩹',
    description: 'Guide for handling physical injuries, fractures, burns, and other trauma-related emergencies.',
    color: 'bg-red-100 border-red-200',
    iconColor: 'text-red-600',
    emergencies: [
      { id: 'burns', name: 'Burns & Scalds', emoji: '🔥', severity: 'high' },
      { id: 'cuts-bleeding', name: 'Cuts & Bleeding', emoji: '🩸', severity: 'high' },
      { id: 'fractures', name: 'Fractures & Sprains', emoji: '🦴', severity: 'medium' },
      { id: 'head-injuries', name: 'Head Injuries & Concussions', emoji: '🤕', severity: 'high' },
      { id: 'eye-injuries', name: 'Eye Injuries', emoji: '👁️', severity: 'medium' },
      { id: 'nosebleeds', name: 'Nosebleeds', emoji: '👃', severity: 'low' },
      { id: 'electric-shock', name: 'Electric Shock', emoji: '⚡', severity: 'high' }
    ]
  },
  {
    id: 'cardiac-respiratory',
    name: 'Cardiac & Respiratory',
    emoji: '❤️',
    description: 'Critical emergency procedures for heart attacks, strokes, choking, and breathing difficulties.',
    color: 'bg-red-100 border-red-200',
    iconColor: 'text-red-600',
    emergencies: [
      { id: 'heart-attack', name: 'Heart Attack (CPR & AED)', emoji: '❤️', severity: 'critical' },
      { id: 'stroke', name: 'Stroke (FAST test)', emoji: '🧠', severity: 'critical' },
      { id: 'choking', name: 'Choking (Heimlich maneuver)', emoji: '🫁', severity: 'critical' },
      { id: 'drowning', name: 'Drowning & near-drowning rescue', emoji: '🌊', severity: 'critical' },
      { id: 'asthma-attack', name: 'Severe asthma attack', emoji: '😤', severity: 'high' }
    ]
  },
  {
    id: 'animal-insect-bites',
    name: 'Animal & Insect Bites',
    emoji: '🐍',
    description: 'First aid for bites and stings from snakes, dogs, insects, and other animals.',
    color: 'bg-blue-100 border-blue-200',
    iconColor: 'text-blue-600',
    emergencies: [
      { id: 'snake-bite', name: 'Snake Bite', emoji: '🐍', severity: 'critical' },
      { id: 'dog-bite', name: 'Dog Bite', emoji: '🐕', severity: 'medium' },
      { id: 'scorpion-sting', name: 'Scorpion Sting', emoji: '🦂', severity: 'high' },
      { id: 'bee-sting', name: 'Bee or Wasp Sting', emoji: '🐝', severity: 'low' },
      { id: 'spider-bite', name: 'Spider Bite', emoji: '🕷️', severity: 'medium' }
    ]
  },
  {
    id: 'neurological-emergencies',
    name: 'Neurological Emergencies',
    emoji: '🧠',
    description: 'Handling seizures, fainting, unconsciousness, and other brain-related emergencies.',
    color: 'bg-purple-100 border-purple-200',
    iconColor: 'text-purple-600',
    emergencies: [
      { id: 'panic-attack', name: 'Panic Attack & Hyperventilation', emoji: '😰', severity: 'medium' },
      { id: 'seizures', name: 'Seizures & Epilepsy', emoji: '🤯', severity: 'high' },
      { id: 'unconsciousness', name: 'Unconsciousness & Fainting', emoji: '😵', severity: 'high' },
      { id: 'heatstroke', name: 'Heatstroke & Dehydration', emoji: '☀️', severity: 'high' }
    ]
  },
  {
    id: 'poisoning-overdose',
    name: 'Poisoning & Overdose',
    emoji: '☠️',
    description: 'Emergency steps for various types of poisoning including food, chemicals, and drug overdose.',
    color: 'bg-green-100 border-green-200',
    iconColor: 'text-green-600',
    emergencies: [
      { id: 'food-poisoning', name: 'Food Poisoning', emoji: '🤢', severity: 'medium' },
      { id: 'alcohol-poisoning', name: 'Alcohol Poisoning', emoji: '🍺', severity: 'high' },
      { id: 'drug-overdose', name: 'Drug Overdose', emoji: '💊', severity: 'critical' },
      { id: 'chemical-poisoning', name: 'Chemical Poisoning', emoji: '🧪', severity: 'high' },
      { id: 'plant-ingestion', name: 'Poisonous Plant Ingestion', emoji: '☘️', severity: 'medium' },
      { id: 'carbon-monoxide', name: 'Carbon Monoxide Poisoning', emoji: '🚗', severity: 'critical' }
    ]
  },
  {
    id: 'environmental-emergencies',
    name: 'Environmental Emergencies',
    emoji: '🌪️',
    description: 'Dealing with heat exhaustion, hypothermia, drowning, and natural disaster injuries.',
    color: 'bg-green-100 border-green-200',
    iconColor: 'text-green-600',
    emergencies: [
      { id: 'earthquake-survival', name: 'Earthquake Survival Guide', emoji: '🏠', severity: 'high' },
      { id: 'flood-rescue', name: 'Flood Rescue Guide', emoji: '🌊', severity: 'high' },
      { id: 'tornado-safety', name: 'Tornado Safety', emoji: '🌪️', severity: 'high' },
      { id: 'landslide', name: 'Landslide Emergency Steps', emoji: '⛰️', severity: 'high' },
      { id: 'forest-fire', name: 'Forest Fire Safety', emoji: '🔥', severity: 'high' },
      { id: 'lightning-strike', name: 'Lightning Strike Protection', emoji: '⚡', severity: 'high' },
      { id: 'cyclone', name: 'Cyclone & Hurricane Survival', emoji: '🌪️🌊', severity: 'high' },
      { id: 'hypothermia', name: 'Hypothermia (extreme cold)', emoji: '❄️', severity: 'high' },
      { id: 'frostbite', name: 'Frostbite', emoji: '🥶', severity: 'medium' },
      { id: 'heat-exhaustion', name: 'Heat Exhaustion', emoji: '☀️', severity: 'medium' },
      { id: 'sunstroke', name: 'Sunstroke', emoji: '🏜️', severity: 'high' }
    ]
  }
];

export const emergencySteps = {
  'burns': {
    title: 'Burns & Scalds',
    emoji: '🔥',
    severity: 'high',
    estimatedTime: '15-20 minutes (initial care)',
    steps: [
      {
        id: 1,
        title: 'Stop the Burning Process',
        description: 'Immediately remove the person from the heat source. If clothing is on fire, use the "stop, drop, and roll" method or smother flames with a blanket.',
        image: 'Person rolling on ground to extinguish flames on clothing',
        warning: 'Do not run if clothes are on fire, this fans the flames.',
        tips: ['Remove hot or burned clothing unless it is stuck to the skin.', 'Remove jewelry near the burn area.']
      },
      {
        id: 2,
        title: 'Cool the Burn',
        description: 'Cool the burn with cool (not ice-cold) running water for at least 10-20 minutes. Do not use ice, butter, or ointments.',
        image: 'Cooling a burn under a running tap with cool water',
        warning: 'Avoid using ice directly on the burn as it can cause further damage. Do not break blisters.',
        tips: ['If running water is not available, use cool compresses.', 'Cooling helps reduce pain and swelling.']
      },
      {
        id: 3,
        title: 'Cover the Burn',
        description: 'Cover the burn with a sterile non-stick dressing or clean cloth. Do not use fluffy cotton wool or other materials that may stick.',
        image: 'Applying a sterile non-stick dressing to a burn',
        warning: 'Do not apply adhesive dressings directly to the burn.',
        tips: ['A clean plastic food wrap can be used temporarily for large burns.', 'Keep the person warm to prevent hypothermia, especially with large burns.']
      },
      {
        id: 4,
        title: 'Seek Medical Attention',
        description: 'For all but very minor burns, seek medical attention. Call emergency services for severe burns (large, deep, on face/hands/feet/genitals, or chemical/electrical burns).',
        image: 'Person on phone calling for medical help for a burn victim',
        warning: 'Electrical and chemical burns always require urgent medical assessment.',
        tips: ['Elevate the burned area if possible to reduce swelling.', 'Monitor for signs of shock.']
      }
    ],
    importantInfo: [
      'Assess the size and depth of the burn.',
      'Chemical burns require flushing with copious amounts of water for at least 20 minutes.',
      'Electrical burns can cause internal injuries; always seek medical help.'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=RokLdC-z71U' 
  },
  'cuts-bleeding': {
    title: 'Cuts & Bleeding',
    emoji: '🩸',
    severity: 'high',
    estimatedTime: '5-15 minutes (to control bleeding)',
    steps: [
      {
        id: 1,
        title: 'Apply Direct Pressure',
        description: 'Apply firm, direct pressure to the wound using a clean cloth or sterile dressing. Maintain pressure continuously.',
        image: 'Applying direct pressure to a bleeding cut with a clean cloth',
        warning: 'If an object is embedded in the wound, do NOT remove it. Apply pressure around it.',
        tips: ['If blood soaks through the first cloth, add another on top. Do not remove the first one.']
      },
      {
        id: 2,
        title: 'Elevate the Injured Area',
        description: 'If possible, elevate the bleeding part above the level of the heart. This helps reduce blood flow to the area.',
        image: 'Elevating an injured arm with a bleeding cut above heart level',
        warning: 'Do not elevate if you suspect a fracture or broken bone in that limb.',
        tips: ['Use pillows or cushions for support.']
      },
      {
        id: 3,
        title: 'Clean the Wound (Minor Cuts)',
        description: 'Once bleeding is controlled for minor cuts, clean the wound gently with soap and water or an antiseptic wipe. Pat dry.',
        image: 'Gently cleaning a minor cut with soap and water',
        warning: 'For severe bleeding, focus on controlling bleeding first; cleaning can wait for medical professionals.',
        tips: ['Remove any visible dirt or debris if it comes out easily.']
      },
      {
        id: 4,
        title: 'Cover the Wound',
        description: 'Apply a sterile dressing or clean bandage to the wound. Secure it firmly but not too tightly.',
        image: 'Applying a sterile bandage to a cleaned cut',
        warning: 'If bleeding is severe and does not stop, or if the cut is deep or gaping, seek immediate medical attention.',
        tips: ['Change the dressing daily or if it gets wet or dirty.', 'Watch for signs of infection (redness, swelling, pus, fever).']
      }
    ],
    importantInfo: [
      'Wear disposable gloves if available to protect yourself.',
      'For severe bleeding, call emergency services immediately.',
      'A tourniquet should only be used as a last resort by trained individuals for life-threatening limb bleeding.'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=EaJmzB8YgS4'
  },
   'fractures': {
    title: 'Fractures & Sprains',
    emoji: '🦴',
    severity: 'medium',
    estimatedTime: '10-20 minutes (initial care)',
    steps: [
      {
        id: 1,
        title: 'Ensure Safety and Assess',
        description: 'Make sure the area is safe. Ask the person what happened and where it hurts. Look for deformity, swelling, bruising, or an open wound near the suspected fracture.',
        image: 'Assessing an injured limb for signs of fracture',
        warning: 'Do not try to straighten a deformed limb or push back any protruding bone.',
        tips: ['Compare the injured limb to the uninjured one if possible.']
      },
      {
        id: 2,
        title: 'Immobilize the Injured Area',
        description: 'Keep the injured part still. Support it in the position you found it. You can use splints (e.g., rolled-up newspapers, magazines, pieces of wood) padded with cloth, and secure them with bandages or cloth strips above and below the injury.',
        image: 'Immobilizing a fractured arm with a makeshift splint and bandages',
        warning: 'Do not tie bandages too tightly; check for circulation (warmth, color, sensation) beyond the bandage.',
        tips: ['For a suspected leg fracture, you can tie the injured leg to the uninjured one if no splint is available.', 'For an arm fracture, a sling can help support it.']
      },
      {
        id: 3,
        title: 'Apply Cold Pack (for Sprains/Swelling)',
        description: 'If it\'s likely a sprain or there is swelling with a closed fracture, apply a cold pack wrapped in a cloth to the injured area for up to 20 minutes at a time. This can help reduce pain and swelling.',
        image: 'Applying a cold pack to a swollen ankle',
        warning: 'Do not apply ice directly to the skin.',
        tips: ['Elevate the injured limb to help reduce swelling.']
      },
      {
        id: 4,
        title: 'Seek Medical Help',
        description: 'Call emergency services if the fracture is severe (e.g., open fracture, severe deformity, person is in shock, or if head/neck/back injury is suspected). For less severe suspected fractures or sprains, arrange transport to a medical facility.',
        image: 'Calling for medical assistance for a person with a suspected fracture',
        warning: 'Monitor for signs of shock (pale, cold, clammy skin; rapid pulse; dizziness).',
        tips: ['Do not give the person anything to eat or drink as surgery might be needed.']
      }
    ],
    importantInfo: [
      'An open fracture (bone protruding through skin) is a serious emergency requiring immediate medical attention.',
      'Control any bleeding associated with an open fracture by applying pressure around the wound, not directly on the protruding bone.',
      'Suspect a head, neck, or back injury if the person fell from a height or was in a significant accident; do not move them unless absolutely necessary.'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=ZtBNDSy9J1A'
  },
  'head-injuries': {
    title: 'Head Injuries & Concussions',
    emoji: '🤕',
    severity: 'high',
    estimatedTime: '5-15 minutes (initial observation & care)',
    steps: [
      {
        id: 1,
        title: 'Ensure Safety & Check Responsiveness',
        description: 'Make sure the area is safe. Check if the person is conscious. Ask simple questions like "What is your name?". If unresponsive, check for breathing and be prepared for CPR.',
        image: 'Checking responsiveness of a person with a head injury',
        warning: 'If a neck or spine injury is suspected, do NOT move the person unless they are in immediate danger. Stabilize the head and neck.',
        tips: ['Assume a neck/spine injury with any significant head trauma.']
      },
      {
        id: 2,
        title: 'Call for Emergency Medical Help',
        description: 'Call emergency services immediately for any serious head injury, loss of consciousness (even brief), confusion, severe headache, vomiting, seizures, or bleeding from ears/nose.',
        image: 'Calling emergency services for a person with a head injury',
        warning: 'Delay in getting medical help can have serious consequences.',
        tips: ['Provide details about how the injury occurred and the person\'s symptoms.']
      },
      {
        id: 3,
        title: 'Control Bleeding & Keep Still',
        description: 'If there is bleeding from a scalp wound, apply firm pressure with a clean cloth. Keep the person lying down and still. If conscious and no neck injury is suspected, you can slightly elevate their head and shoulders.',
        image: 'Applying pressure to a scalp wound on a head injury victim',
        warning: 'Do not apply direct pressure if you suspect a skull fracture (depression in the skull, clear fluid from ears/nose). Apply pressure to the edges of the wound instead.',
        tips: ['Do not remove any embedded objects.']
      },
      {
        id: 4,
        title: 'Monitor Symptoms',
        description: 'Watch for changes in consciousness, alertness, breathing, or new symptoms like seizures, worsening headache, visual disturbances, or weakness. Report these to emergency services.',
        image: 'Monitoring a person with a head injury for changing symptoms',
        warning: 'Symptoms of a concussion or serious head injury can be delayed. Continued observation is crucial.',
        tips: ['Keep the person calm and reassured.', 'Do not give them anything to eat or drink.']
      }
    ],
    importantInfo: [
      'Concussion symptoms include headache, dizziness, confusion, memory problems, nausea, sensitivity to light/noise. These may not appear immediately.',
      'Anyone with a suspected concussion should be evaluated by a healthcare professional.',
      'Avoid letting someone with a significant head injury go to sleep until they have been medically assessed (unless advised otherwise by medical personnel).'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=OfoKkR4Gq9g'
  },
  'eye-injuries': {
    title: 'Eye Injuries',
    emoji: '👁️',
    severity: 'medium',
    estimatedTime: '5-15 minutes (initial care)',
    steps: [
      {
        id: 1,
        title: 'Small Particle in Eye',
        description: 'Advise the person not to rub their eye. Try to flush the eye with clean water or sterile saline solution. Tilt the head so the affected eye is lower and pour water from the inner corner outwards. If the particle is visible on the white of the eye or eyelid, you can try to gently remove it with a moist cotton swab or corner of a clean cloth.',
        image: 'Flushing an eye with clean water to remove a small particle',
        warning: 'Do not try to remove an object that is embedded in the eyeball or directly on the cornea (the clear front part).',
        tips: ['Pulling the upper eyelid down over the lower eyelid can sometimes dislodge a particle with tears.']
      },
      {
        id: 2,
        title: 'Chemical Burn to Eye',
        description: 'Immediately flush the eye with copious amounts of cool, clean water for at least 15-20 minutes. Hold the eyelids open. Tilt the head so the chemical runs away from the unaffected eye. Call emergency services or go to an ER immediately.',
        image: 'Flushing an eye extensively with water after a chemical splash',
        warning: 'Speed is crucial. Do not delay flushing. Identify the chemical if possible.',
        tips: ['If both eyes are affected, flush them simultaneously if possible or alternate quickly.']
      },
      {
        id: 3,
        title: 'Blow to the Eye / Black Eye',
        description: 'Apply a cold compress (ice pack wrapped in cloth) gently to the area around the eye for 15-20 minutes at a time, for the first 24-48 hours. Do not put pressure directly on the eyeball.',
        image: 'Applying a cold compress to a black eye',
        warning: 'Seek medical attention if there is vision loss, severe pain, blood in the white of the eye, or if the eyeball looks misshapen.',
        tips: ['After 48 hours, warm compresses may help with bruising.']
      },
      {
        id: 4,
        title: 'Cut or Puncture Wound to Eye/Eyelid',
        description: 'Do NOT wash the eye or try to remove any object stuck in it. Cover the injured eye with a protective shield (like the bottom of a paper cup taped in place) without putting pressure on the eye. If possible, cover the uninjured eye too to limit eye movement. Seek immediate medical attention.',
        image: 'Covering a punctured eye with a protective shield (paper cup bottom)',
        warning: 'Any penetrating eye injury is an emergency. Do not apply pressure.',
        tips: ['Keep the person calm and still.']
      }
    ],
    importantInfo: [
      'Always seek medical attention if there is pain, blurred vision, persistent redness, or any doubt about the severity of an eye injury.',
      'Prevent eye injuries by wearing protective eyewear during risky activities.'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=mS1koTeTnoA'
  },
  'nosebleeds': {
    title: 'Nosebleeds',
    emoji: '👃',
    severity: 'low',
    estimatedTime: '10-20 minutes (to stop bleeding)',
    steps: [
      {
        id: 1,
        title: 'Sit Up and Lean Forward',
        description: 'Have the person sit upright and lean slightly forward. This prevents blood from running down the back of the throat, which can cause nausea or choking.',
        image: 'Person sitting upright and leaning forward during a nosebleed',
        warning: 'Do not have the person lie down or tilt their head back.',
        tips: ['Provide tissues or a bowl to catch the blood.']
      },
      {
        id: 2,
        title: 'Pinch the Nose',
        description: 'Using your thumb and index finger, firmly pinch the soft part of the nose (just below the bony bridge) for at least 10-15 minutes continuously. Breathe through the mouth.',
        image: 'Pinching the soft part of the nose to stop a nosebleed',
        warning: 'Do not release pressure to check if bleeding has stopped until at least 10 minutes have passed.',
        tips: ['If bleeding continues after 10-15 minutes, reapply pressure for another 10 minutes.']
      },
      {
        id: 3,
        title: 'Apply Cold Compress (Optional)',
        description: 'Applying a cold compress or ice pack wrapped in a cloth to the bridge of the nose and cheeks can help constrict blood vessels and reduce bleeding.',
        image: 'Applying a cold compress to the bridge of the nose',
        warning: 'Do not put ice directly inside the nose.',
        tips: ['This can be done while pinching the nose.']
      },
      {
        id: 4,
        title: 'After Bleeding Stops',
        description: 'Once bleeding has stopped, advise the person to avoid blowing their nose, picking it, or strenuous activity for several hours (preferably 24 hours) to prevent re-bleeding. They can gently sniff if needed.',
        image: 'Person resting calmly after a nosebleed has stopped',
        warning: 'Seek medical attention if bleeding is severe, lasts longer than 20-30 minutes despite pressure, is due to an injury (like a fall or blow to the face), or if the person has frequent nosebleeds.',
        tips: ['Using a humidifier or saline nasal spray can help keep nasal passages moist and prevent future nosebleeds, especially in dry climates.']
      }
    ],
    importantInfo: [
      'Most nosebleeds are not serious and can be managed at home.',
      'If the person takes blood-thinning medication, it may take longer for bleeding to stop; seek medical advice if concerned.',
      'Nosebleeds after a head injury can be serious and require immediate medical evaluation.'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=9_0k9H2G3fE'
  },
  'electric-shock': {
    title: 'Electric Shock',
    emoji: '⚡',
    severity: 'high',
    estimatedTime: '5-10 minutes (initial care)',
    steps: [
      {
        id: 1,
        title: 'Ensure Safety First',
        description: 'Do not touch the person if they are still in contact with the electrical source. Turn off the power source if possible. If you cannot turn off the power, use a dry, non-conductive object (like a wooden broom handle or rubber mat) to separate the person from the source.',
        image: 'Person using a wooden broom handle to move an electrical wire away from a victim',
        warning: 'Never touch someone who is still connected to an electrical source with your bare hands. Do not use metal or wet objects.',
        tips: ['Turn off the main power switch or unplug the appliance.', 'Stand on a dry, non-conductive surface like a rubber mat or dry wooden board.']
      },
      {
        id: 2,
        title: 'Call Emergency Services',
        description: 'Once the person is clear of the electrical source and it is safe to approach, call emergency services immediately, even if the person seems fine. Electrical shocks can cause internal injuries.',
        image: 'First aider calling emergency services after ensuring scene safety for electric shock victim',
        warning: 'All victims of electric shock should be evaluated by a medical professional.',
        tips: ['Provide your location and details about the incident.']
      },
      {
        id: 3,
        title: 'Check for Responsiveness and Breathing',
        description: 'Check if the person is conscious. Tap their shoulder and shout, "Are you okay?". Check for normal breathing. If the person is unresponsive and not breathing or only gasping, start CPR immediately.',
        image: 'First aider checking responsiveness of an electric shock victim',
        warning: 'Be prepared to start CPR. Electrical shock can cause cardiac arrest.',
        tips: ['If an AED is available, use it as soon as possible.']
      },
      {
        id: 4,
        title: 'Treat Burns and Other Injuries',
        description: 'Look for entry and exit burns. Cool any burns with cool (not ice-cold) running water for 10-20 minutes. Cover with a sterile non-stick dressing or clean cloth. Treat any other visible injuries.',
        image: 'Treating electrical burns on a victim\'s hand with cool running water',
        warning: 'Do not apply ice, butter, or ointments to burns. Do not break blisters.',
        tips: ['Keep the person lying down with their head slightly lower than their body and legs elevated, unless a head, neck, or back injury is suspected.', 'Keep the person warm.']
      }
    ],
    importantInfo: [
      'Electrical burns may look minor on the surface but can be deep and cause significant internal damage.',
      'Monitor the person closely for changes in breathing or consciousness until help arrives.',
      'Do not move the person if a head, neck, or spine injury is suspected, unless they are in immediate danger.'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=Q0kYqG0qC5o'
  },
  'heart-attack': {
    title: 'Heart Attack (CPR & AED)',
    emoji: '❤️',
    severity: 'critical',
    estimatedTime: 'Immediate action required',
    steps: [
      {
        id: 1,
        title: 'Call Emergency Services Immediately',
        description: 'Recognize the signs of a heart attack (chest pain/discomfort, pain radiating to arm/jaw/neck/back, shortness of breath, nausea, sweating, dizziness). Call 911 or your local emergency number without delay.',
        image: 'Person clutching chest and another person calling emergency services',
        warning: 'Time is muscle. The sooner treatment begins, the better the outcome.',
        tips: ['Clearly state that you suspect a heart attack.', 'Do not drive the person to the hospital yourself unless there is no other option. Wait for the ambulance.']
      },
      {
        id: 2,
        title: 'Help the Person Rest',
        description: 'Have the person sit down and rest in a comfortable position, usually half-sitting with knees bent (W-position). Loosen any tight clothing.',
        image: 'Person having a heart attack resting in a half-sitting position',
        warning: 'Do not let the person walk around or exert themselves.',
        tips: ['Keep the person calm and reassure them that help is on the way.']
      },
      {
        id: 3,
        title: 'Administer Aspirin (if appropriate)',
        description: 'If the person is conscious, not allergic to aspirin, and has no condition that makes aspirin unsafe (like active bleeding), give them one adult aspirin tablet (300-325mg) to chew slowly and swallow. Do not give if they have been advised against it by a doctor.',
        image: 'Giving an aspirin tablet to a conscious person suspected of heart attack',
        warning: 'Only give aspirin if all conditions are met. If unsure, wait for medical advice.',
        tips: ['Chewing the aspirin helps it work faster.']
      },
      {
        id: 4,
        title: 'Be Prepared for CPR and AED',
        description: 'If the person becomes unconscious and stops breathing normally, start CPR immediately. If an Automated External Defibrillator (AED) is available, use it as soon as possible following the device instructions.',
        image: 'Person performing CPR on an unconscious victim, with an AED nearby',
        warning: 'Do not delay starting CPR if needed. Follow AED prompts carefully.',
        tips: ['Push hard and fast in the center of the chest (100-120 compressions per minute).', 'Continue CPR and AED use until professional help arrives or the person starts to breathe.']
      }
    ],
    importantInfo: [
      'Not everyone experiences severe chest pain with a heart attack. Symptoms can vary, especially in women and older adults.',
      'If prescribed, help the person take their own nitroglycerin.',
      'Stay with the person until emergency medical services arrive.'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=O_49wMpdews'
  },
  'stroke': {
    title: 'Stroke (FAST test)',
    emoji: '🧠',
    severity: 'critical',
    estimatedTime: 'Immediate action required',
    steps: [
      {
        id: 1,
        title: 'Recognize Stroke Symptoms (FAST)',
        description: 'Use the FAST test: \nF - Face Drooping: Does one side of the face droop or is it numb? Ask the person to smile. Is the smile uneven? \nA - Arm Weakness: Is one arm weak or numb? Ask the person to raise both arms. Does one arm drift downward? \nS - Speech Difficulty: Is speech slurred? Is the person unable to speak or hard to understand? Ask them to repeat a simple sentence. \nT - Time to call emergency services: If you see any of these signs, call 911 or your local emergency number immediately.',
        image: 'Graphic illustrating the FAST signs of a stroke',
        warning: 'Note the time when the first symptoms appeared. This is important for treatment decisions.',
        tips: ['Other symptoms can include sudden confusion, trouble seeing, sudden severe headache, dizziness, or loss of balance.']
      },
      {
        id: 2,
        title: 'Call Emergency Services Immediately',
        description: 'Call 911 or your local emergency number right away. Clearly state you suspect a stroke and report the time symptoms started.',
        image: 'Person urgently calling emergency services for a suspected stroke',
        warning: 'Do not wait to see if symptoms improve. Every minute counts.',
        tips: ['Do not drive the person to the hospital yourself. Paramedics can start treatment en route.']
      },
      {
        id: 3,
        title: 'Keep the Person Comfortable and Safe',
        description: 'If the person is conscious, help them lie down on their side with their head slightly raised and supported to prevent choking if they vomit. Loosen any tight clothing.',
        image: 'Person suspected of stroke resting on their side with head supported',
        warning: 'Do not give the person anything to eat or drink, as they may have difficulty swallowing.',
        tips: ['Reassure the person and keep them calm.']
      },
      {
        id: 4,
        title: 'Monitor and Prepare for CPR',
        description: 'Monitor the person\'s breathing and level of consciousness. If they become unresponsive and stop breathing normally, be prepared to start CPR.',
        image: 'Monitoring a stroke victim while waiting for ambulance',
        warning: 'Do not give any medication, especially aspirin, as some strokes are caused by bleeding and aspirin could worsen it.',
        tips: ['Gather any medications the person takes to give to the paramedics.']
      }
    ],
    importantInfo: [
      'Rapid treatment can significantly reduce brain damage and long-term disability from a stroke.',
      'There are different types of strokes, and treatment varies. A hospital will determine the type and best treatment.',
      'Stay with the person until help arrives.'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=cvPAqI8hA3Y'
  },
  'choking': {
    title: 'Choking (Heimlich Maneuver)',
    emoji: '🫁',
    severity: 'critical',
    estimatedTime: 'Immediate action required',
    steps: [
      {
        id: 1,
        title: 'Assess the Situation',
        description: "Ask 'Are you choking? Can you speak or cough?'. If the person can cough forcefully, encourage them to keep coughing.",
        image: 'Person asking another if they are choking',
        warning: 'Do not interfere if the person is coughing effectively or can speak.',
        tips: ['A person who is choking may clutch their throat.']
      },
      {
        id: 2,
        title: 'Give Back Blows (Adult/Child)',
        description: 'If the person cannot speak, cough, or breathe, stand behind them and slightly to one side. Support their chest with one hand. Lean them forward and give up to 5 sharp blows between their shoulder blades with the heel of your other hand.',
        image: 'Performing back blows on a choking adult',
        warning: 'Ensure the person is leaning forward so the object comes out of their mouth rather than going further down.',
        tips: ['Check if the obstruction has cleared after each blow.']
      },
      {
        id: 3,
        title: 'Perform Abdominal Thrusts (Heimlich Maneuver - Adult/Child)',
        description: 'If back blows fail, stand behind the person. Place your arms around their waist. Make a fist with one hand and place it thumb-side against the middle of their abdomen, just above the navel. Grasp your fist with your other hand and deliver up to 5 quick, upward and inward thrusts.',
        image: 'Performing abdominal thrusts (Heimlich maneuver) on a choking adult',
        warning: 'Do not perform abdominal thrusts on pregnant women or infants. For pregnant women, use chest thrusts.',
        tips: ['Alternate between 5 back blows and 5 abdominal thrusts until the object is dislodged or the person becomes unconscious.']
      },
      {
        id: 4,
        title: 'If Person Becomes Unconscious',
        description: 'If the person becomes unconscious, carefully lower them to the floor. Call emergency services immediately. Begin CPR, starting with chest compressions. Before giving rescue breaths, look in the mouth and remove any visible obstruction.',
        image: 'Person starting CPR on an unconscious choking victim',
        warning: 'Never do a blind finger sweep of the mouth as it may push the object further down.',
        tips: ['Continue CPR until help arrives or the person starts breathing.']
      }
    ],
    importantInfo: [
      'For infants (under 1 year), use 5 back blows and 5 chest thrusts (using two fingers in the center of the chest).',
      'Always seek medical attention after choking, even if the object is dislodged, as complications can occur.'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=gH9iQc32Y5M'
  },
  'drowning': {
    title: 'Drowning & Near-Drowning Rescue',
    emoji: '🌊',
    severity: 'critical',
    estimatedTime: 'Immediate action required',
    steps: [
      {
        id: 1,
        title: 'Ensure Your Safety First',
        description: 'Do not enter the water to rescue someone unless you are trained in water rescue. Many rescuers drown. Call for help immediately. If safe, try to reach the person with an object (pole, rope, flotation device) or throw them a flotation device.',
        image: 'Person throwing a flotation device to someone in water',
        warning: 'Never put yourself at risk. "Reach, Throw, Row, Don\'t Go".',
        tips: ['Shout for help to alert others.']
      },
      {
        id: 2,
        title: 'Remove from Water & Call Emergency',
        description: 'Once the person is out of the water (or if you find them unresponsive near water), immediately call emergency services. If you are alone, shout for help. If the person is unresponsive, assess for breathing.',
        image: 'Removing a person from water safely and calling for help',
        warning: 'Handle the person gently, especially if a diving injury (neck/spine) is suspected.',
        tips: ['If a spinal injury is possible, try to keep head, neck, and back aligned during removal.']
      },
      {
        id: 3,
        title: 'Check Breathing & Start CPR if Needed',
        description: 'If the person is unresponsive and not breathing or only gasping, start CPR immediately. Begin with chest compressions. If you are trained, give rescue breaths after 30 compressions. Water in the lungs is not the primary issue; lack of oxygen is.',
        image: 'Performing CPR on a drowning victim on land',
        warning: 'Do not try to remove water from the lungs by pushing on the abdomen; this is ineffective and can cause vomiting.',
        tips: ['If an AED is available, use it as soon as possible, ensuring the person is dry on the chest area.']
      },
      {
        id: 4,
        title: 'Keep Warm & Monitor',
        description: 'If the person is breathing, place them in the recovery position (on their side) to allow fluids to drain. Remove wet clothing and cover them with dry blankets or clothes to prevent hypothermia. Monitor their condition until help arrives.',
        image: 'Drowning victim in recovery position covered with a blanket',
        warning: 'All near-drowning victims, even if they seem fine, MUST be evaluated at a hospital due to risk of "secondary drowning" or other complications.',
        tips: ['Continue to reassure the person if they are conscious.']
      }
    ],
    importantInfo: [
      'Hypothermia is a common complication of cold water immersion.',
      'Even a small amount of water in the lungs can cause serious problems later.',
      'Prevention is key: supervise children near water, use life jackets, learn to swim, avoid alcohol around water activities.'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=2jGiH_0YSkc'
  },
  'asthma-attack': {
    title: 'Severe Asthma Attack',
    emoji: '😤',
    severity: 'high',
    estimatedTime: '5-15 minutes (initial management)',
    steps: [
      {
        id: 1,
        title: 'Recognize a Severe Attack',
        description: 'Signs include: difficulty breathing, wheezing, coughing, tight chest, being too breathless to speak, eat, or sleep. Bluish lips or fingernails (cyanosis) are a very serious sign.',
        image: 'Person struggling to breathe during an asthma attack',
        warning: 'A severe asthma attack can be life-threatening. Act quickly.',
        tips: ['The person may be distressed or panicky.']
      },
      {
        id: 2,
        title: 'Help Person Use Their Reliever Inhaler',
        description: 'Help the person sit upright comfortably (do not lie them down). Help them take one puff of their reliever inhaler (usually blue) every 30-60 seconds, up to a maximum of 10 puffs. If a spacer is available, use it.',
        image: 'Helping someone use their blue reliever inhaler with a spacer',
        warning: 'Only use the person\'s own prescribed reliever inhaler.',
        tips: ['Shake the inhaler well before each puff.', 'Encourage slow, steady breaths.']
      },
      {
        id: 3,
        title: 'Call Emergency Services',
        description: 'If the person does not feel better after using their inhaler, if symptoms worsen, if they cannot complete a sentence in one breath, or if you are worried at any point, call emergency services immediately.',
        image: 'Calling emergency services for a severe asthma attack',
        warning: 'Do not delay calling for help if the inhaler is not working or if the person is very distressed.',
        tips: ['Tell the operator it is an asthma attack.']
      },
      {
        id: 4,
        title: 'Continue Inhaler While Waiting',
        description: 'If emergency help has not arrived within 10-15 minutes and symptoms are not improving, you can repeat giving puffs of the reliever inhaler (1 puff every 30-60 seconds, up to 10 puffs) while waiting.',
        image: 'Person continuing to use inhaler while waiting for ambulance',
        warning: 'Monitor their breathing and consciousness.',
        tips: ['Keep the person calm and reassured.']
      }
    ],
    importantInfo: [
      'Preventer inhalers (often brown, red, or orange) do NOT help during an attack.',
      'Everyone with asthma should have an asthma action plan from their doctor.',
      'After a severe attack, even if symptoms improve, the person should see a doctor.'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=7z3aJ4T7eB8'
  },
  'snake-bite': {
    title: 'Snake Bite',
    emoji: '🐍',
    severity: 'critical',
    estimatedTime: 'Immediate action required',
    steps: [
      {
        id: 1,
        title: 'Ensure Safety and Call for Help',
        description: 'Move away from the snake to avoid further bites. Call emergency services immediately. Note the time of the bite and, if possible, a description of the snake (do not try to catch it).',
        image: 'Person moving away from a snake and calling emergency services',
        warning: 'Do NOT try to catch, kill, or get close to the snake.',
        tips: ['Assume the snake is venomous.', 'Stay calm to slow venom spread.']
      },
      {
        id: 2,
        title: 'Keep Calm and Still',
        description: 'Keep the bitten person calm and as still as possible. Lay them down and keep the bitten limb below the level of the heart.',
        image: 'Person lying still with bitten limb immobilized after a snake bite',
        warning: 'Do NOT allow the person to walk or move around.',
        tips: ['Reassure the person.', 'Activity can speed up the absorption of venom.']
      },
      {
        id: 3,
        title: 'Immobilize the Bitten Limb',
        description: 'Immobilize the bitten limb with a splint or sling. If the bite is on a limb, apply a pressure immobilization bandage (if trained to do so and it\'s recommended for local snakes). Start bandaging from the fingers/toes upwards, covering the bite site, and continue up the limb as far as possible. It should be firm but not too tight to cut off circulation.',
        image: 'Applying a pressure immobilization bandage to a snake-bitten limb',
        warning: 'Do NOT cut the wound, suck out venom, apply a tourniquet, or use ice.',
        tips: ['Mark the bite site on the bandage if possible.', 'Check circulation beyond the bandage regularly.']
      },
      {
        id: 4,
        title: 'Monitor and Transport',
        description: 'Monitor the person\'s breathing, pulse, and level of consciousness. Transport to a medical facility as quickly and safely as possible, even if symptoms are mild.',
        image: 'Monitoring a snake bite victim while awaiting transport to hospital',
        warning: 'Symptoms can be delayed. All snake bites require medical evaluation.',
        tips: ['Do not give the person anything to eat or drink, especially alcohol or caffeine.']
      }
    ],
    importantInfo: [
      'Pressure immobilization is primarily recommended for elapid snakes (e.g., cobras, kraits, mambas, sea snakes). It may not be recommended for viper bites in some regions.',
      'Antivenom is the definitive treatment and can only be administered in a hospital.',
      'Remember the snake\'s appearance if possible, but do not risk another bite.'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=ScTRqIIqSZA'
  },
  'dog-bite': {
    title: 'Dog Bite',
    emoji: '🐕',
    severity: 'medium',
    estimatedTime: '10-20 minutes (initial care)',
    steps: [
      {
        id: 1,
        title: 'Ensure Safety',
        description: 'Separate the person from the dog to prevent further bites. If the dog is unknown or behaving aggressively, do not approach it. Ensure your own safety and the safety of others.',
        image: 'Person calmly moving away from an aggressive dog',
        warning: 'Be cautious around any animal, especially if it is injured or scared.',
        tips: ['If the dog is a pet, confine it to another room.']
      },
      {
        id: 2,
        title: 'Wash the Wound',
        description: 'Wash the bite wound thoroughly with soap and warm running water for at least 5-10 minutes. This helps remove bacteria and reduce the risk of infection.',
        image: 'Washing a dog bite wound under running water with soap',
        warning: 'Avoid scrubbing too harshly if the wound is deep or bleeding heavily.',
        tips: ['Allow the water to run over the wound freely.']
      },
      {
        id: 3,
        title: 'Control Bleeding',
        description: 'If the wound is bleeding, apply direct pressure with a clean cloth or sterile dressing until the bleeding stops.',
        image: 'Applying pressure to a bleeding dog bite wound',
        warning: 'If bleeding is severe or doesn\'t stop after 10-15 minutes of pressure, seek immediate medical attention.',
        tips: ['Elevate the injured area if possible.']
      },
      {
        id: 4,
        title: 'Apply Antiseptic and Cover',
        description: 'Apply a topical antiseptic (like povidone-iodine or chlorhexidine) if available. Cover the wound with a sterile non-stick dressing and bandage.',
        image: 'Applying antiseptic and a sterile dressing to a dog bite wound',
        warning: 'Do not use hydrogen peroxide for deep wounds as it can damage tissue.',
        tips: ['Change the dressing daily or if it gets wet or dirty.']
      },
      {
        id: 5,
        title: 'Seek Medical Attention',
        description: 'All dog bites that break the skin should be evaluated by a doctor due to the risk of infection (including rabies and tetanus). This is especially important if the bite is deep, on the face/hands/feet/joints, if the dog is unknown or unvaccinated, or if the person has a weakened immune system.',
        image: 'Person visiting a doctor for a dog bite evaluation',
        warning: 'Watch for signs of infection: redness, swelling, warmth, pus, fever, or increased pain.',
        tips: ['Find out the dog\'s vaccination status if possible. A tetanus booster may be needed.']
      }
    ],
    importantInfo: [
      'Report the bite to local animal control or health authorities as required by your area, especially if the dog was a stray or aggressive.',
      'Rabies is a serious concern; post-exposure prophylaxis may be necessary if the dog\'s rabies status is unknown or it tests positive.',
      'Children are often bitten on the face or neck and are at higher risk for serious injury.'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=gqm9X30ySjA'
  },
  'scorpion-sting': {
    title: 'Scorpion Sting',
    emoji: '🦂',
    severity: 'high',
    estimatedTime: '5-15 minutes (initial care)',
    steps: [
      {
        id: 1,
        title: 'Ensure Safety & Identify (If Possible)',
        description: 'Carefully move the person away from the scorpion. If possible and safe, try to identify the type of scorpion, but do not attempt to catch it or get too close. Call local emergency services or poison control immediately, especially for children or elderly individuals.',
        image: 'Person carefully moving away from a scorpion, another person on phone',
        warning: 'Most scorpion stings are painful but not life-threatening. However, some species are highly venomous.',
        tips: ['Stay calm. Agitation can increase heart rate and venom spread.']
      },
      {
        id: 2,
        title: 'Clean the Sting Site',
        description: 'Wash the area of the sting thoroughly with soap and water.',
        image: 'Cleaning a scorpion sting site with soap and water',
        warning: 'Avoid making any cuts or applying suction to the wound.',
        tips: ['This helps remove any surface venom or dirt.']
      },
      {
        id: 3,
        title: 'Apply a Cool Compress',
        description: 'Apply a cool compress (cloth soaked in cool water or an ice pack wrapped in a thin cloth) to the sting site for 10-15 minutes at a time. This can help reduce pain and swelling.',
        image: 'Applying a cool compress to a scorpion sting',
        warning: 'Do not apply ice directly to the skin.',
        tips: ['Elevate the affected limb slightly if possible.']
      },
      {
        id: 4,
        title: 'Keep the Person Still and Monitor',
        description: 'Keep the person calm and as still as possible to slow the spread of venom. Monitor for severe symptoms: difficulty breathing, muscle twitching or jerking, unusual head/neck/eye movements, drooling, sweating, nausea/vomiting, increased heart rate, or seizures. Seek immediate medical attention if these occur.',
        image: 'Monitoring a person for severe symptoms after a scorpion sting',
        warning: 'Severe reactions are more common in children and older adults, or with stings from highly venomous scorpions.',
        tips: ['Do not give the person any food or drink unless advised by medical personnel.']
      }
    ],
    importantInfo: [
      'Take any pain relievers like acetaminophen or ibuprofen as needed, following package instructions.',
      'Antivenom may be available for specific types of dangerous scorpion stings and is administered in a hospital.',
      'Prevent stings by shaking out shoes and clothing before wearing, especially in areas where scorpions are common. Wear gloves when working outdoors.'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=x9H2p08797w'
  },
  'bee-sting': {
    title: 'Bee or Wasp Sting',
    emoji: '🐝',
    severity: 'low', // Can be high if allergic
    estimatedTime: '5-10 minutes (initial care)',
    steps: [
      {
        id: 1,
        title: 'Remove the Stinger (Bee Stings)',
        description: 'If a bee stinger is visible in the skin, remove it quickly by scraping it sideways with a fingernail, credit card edge, or dull knife. Do not squeeze the stinger with tweezers, as this can release more venom. Wasps do not usually leave their stingers behind.',
        image: 'Scraping a bee stinger out of skin with a credit card',
        warning: 'Act quickly to remove the stinger to minimize venom injection.',
        tips: ['Wasps and hornets can sting multiple times. Move away from the area to avoid more stings.']
      },
      {
        id: 2,
        title: 'Wash the Area',
        description: 'Clean the sting site with soap and water.',
        image: 'Washing a bee sting site with soap and water',
        warning: 'Avoid scratching, as it can increase swelling and risk of infection.',
        tips: ['Pat the area dry gently.']
      },
      {
        id: 3,
        title: 'Apply a Cold Compress',
        description: 'Apply a cold pack (ice wrapped in cloth or a cold compress) to the sting site for 10-15 minutes to reduce pain and swelling.',
        image: 'Applying a cold compress to a bee sting',
        warning: 'Do not apply ice directly to the skin.',
        tips: ['Elevate the affected area if possible.']
      },
      {
        id: 4,
        title: 'Manage Pain and Itching',
        description: 'Over-the-counter pain relievers (like ibuprofen or acetaminophen) can help with pain. Antihistamine creams or tablets can help reduce itching and swelling. A paste of baking soda and water or calamine lotion can also soothe the skin.',
        image: 'Applying calamine lotion to a sting site',
        warning: 'Monitor for signs of allergic reaction.',
        tips: ['Avoid home remedies like vinegar or meat tenderizer, as they are not proven effective and may irritate the skin.']
      },
      {
        id: 5,
        title: 'Watch for Allergic Reaction (Anaphylaxis)',
        description: 'Seek IMMEDIATE medical attention if signs of a severe allergic reaction (anaphylaxis) develop. Symptoms include: difficulty breathing or wheezing, swelling of the face, lips, tongue, or throat, dizziness or fainting, rapid heartbeat, hives or rash spreading beyond the sting site, nausea, vomiting, or abdominal cramps.',
        image: 'Person showing signs of anaphylaxis (swollen face, difficulty breathing) with someone calling emergency',
        warning: 'Anaphylaxis is a life-threatening emergency. If the person has a prescribed epinephrine auto-injector (EpiPen), help them use it immediately and then call emergency services.',
        tips: ['Even if an EpiPen is used and symptoms improve, the person must go to the hospital for observation.']
      }
    ],
    importantInfo: [
      'Most stings cause only local pain, swelling, and redness.',
      'People with known severe allergies should always carry an epinephrine auto-injector.',
      'To prevent stings: avoid strong perfumes, wear light-colored clothing, be cautious around food/drinks outdoors, and avoid disturbing insect nests.'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=zB0Fjyy30hY'
  },
  'spider-bite': {
    title: 'Spider Bite',
    emoji: '🕷️',
    severity: 'medium', // Can be high for venomous spiders
    estimatedTime: '5-15 minutes (initial care)',
    steps: [
      {
        id: 1,
        title: 'Ensure Safety & Identify (If Possible)',
        description: 'Move away from the spider. If possible and safe, try to identify or capture the spider (e.g., in a jar) for identification by experts. This is important if it might be a venomous species (like black widow or brown recluse).',
        image: 'Carefully trying to capture a spider in a jar for identification',
        warning: 'Do not try to handle a spider that might be venomous. Most spider bites are harmless.',
        tips: ['Even if the spider is not captured, note its appearance (color, markings, size).']
      },
      {
        id: 2,
        title: 'Clean the Bite Area',
        description: 'Wash the bite site thoroughly with soap and water.',
        image: 'Cleaning a spider bite site with soap and water',
        warning: 'Avoid scratching the bite, as this can increase irritation and risk of infection.',
        tips: ['Pat the area dry gently.']
      },
      {
        id: 3,
        title: 'Apply a Cool Compress',
        description: 'Apply a cool compress (cloth soaked in cool water or an ice pack wrapped in a thin cloth) to the bite site for 10-15 minutes at a time. This can help reduce pain and swelling.',
        image: 'Applying a cool compress to a spider bite',
        warning: 'Do not apply ice directly to the skin.',
        tips: ['Elevate the affected limb if possible.']
      },
      {
        id: 4,
        title: 'Manage Symptoms & Seek Medical Attention IF NEEDED',
        description: 'For most non-venomous spider bites, over-the-counter pain relievers and antihistamines can manage mild pain and itching. However, seek IMMEDIATE medical attention if: \n- You suspect a bite from a venomous spider (e.g., black widow - severe muscle cramps, abdominal pain; brown recluse - blistering, ulcerating wound). \n- Signs of severe allergic reaction (anaphylaxis) occur. \n- The person develops severe pain, spreading redness, fever, or other concerning symptoms.',
        image: 'Person on phone seeking medical advice for a concerning spider bite',
        warning: 'Brown recluse bites may initially seem minor but can develop into a serious, necrotic ulcer over days. Black widow bites can cause severe systemic symptoms.',
        tips: ['A tetanus booster might be recommended if it\'s been a while since the last one.']
      }
    ],
    importantInfo: [
      'Most spider bites result in only minor local reactions similar to other insect bites.',
      'Black widow spiders are shiny black with a red hourglass mark on the underside. Brown recluse spiders are tan/brown with a violin-shaped mark on their back (can be hard to see).',
      'Prevent bites by shaking out shoes/clothing, wearing gloves when working in sheds/attics, and being cautious in areas where spiders hide.'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=m0GNSJ3fDNo'
  },
  'panic-attack': {
    title: 'Panic Attack & Hyperventilation',
    emoji: '😰',
    severity: 'medium',
    estimatedTime: '5-20 minutes (to manage symptoms)',
    steps: [
      {
        id: 1,
        title: 'Recognize Symptoms',
        description: 'Symptoms of a panic attack can include: rapid heartbeat, chest pain, dizziness, shortness of breath or feeling of choking, trembling, sweating, nausea, fear of losing control or dying, feeling detached. Hyperventilation (over-breathing) often accompanies panic attacks, causing tingling in hands/feet/face, lightheadedness.',
        image: 'Person experiencing symptoms of a panic attack, looking distressed',
        warning: 'Panic attack symptoms can mimic serious medical conditions like a heart attack. If unsure, or if there\'s a history of heart problems, seek medical evaluation.',
        tips: ['Reassure the person that these feelings, while intense, are temporary and not physically dangerous in themselves.']
      },
      {
        id: 2,
        title: 'Stay Calm and Reassure',
        description: 'Speak calmly and reassuringly to the person. Let them know you are there to help and that they are safe. Acknowledge their fear without judgment.',
        image: 'Calmly reassuring someone having a panic attack',
        warning: 'Avoid dismissing their feelings (e.g., "just calm down" can be unhelpful).',
        tips: ['Ask them what might help them. Some people have coping strategies they use.']
      },
      {
        id: 3,
        title: 'Focus on Breathing (If Hyperventilating)',
        description: 'Encourage slow, controlled breathing. \n- Ask them to breathe in slowly through their nose for a count of 4. \n- Hold for a count of 1-2. \n- Breathe out slowly through their mouth (or nose) for a count of 6-8. \n- You can breathe with them to model the pace. \n- Avoid paper bag rebreathing unless specifically advised by a doctor for that individual, as it can be harmful in some medical conditions.',
        image: 'Guiding someone to practice slow, controlled breathing',
        warning: 'Paper bag rebreathing is generally not recommended due to risks if the cause is not hyperventilation (e.g., asthma, heart problem).',
        tips: ['Counting breaths or focusing on the sensation of air can help.']
      },
      {
        id: 4,
        title: 'Grounding Techniques & Distraction',
        description: 'Help the person focus on their surroundings or physical sensations to ground them in the present. \n- Ask them to name 5 things they can see, 4 they can touch, 3 they can hear, 2 they can smell, and 1 they can taste (5-4-3-2-1 technique). \n- Encourage sips of water. \n- Gentle distraction with a simple conversation can also help.',
        image: 'Person using a grounding technique, like touching an object, during a panic attack',
        warning: 'If the panic attack is severe, prolonged, or if the person has thoughts of self-harm, seek professional help.',
        tips: ['Once the panic attack subsides, encourage them to rest.']
      }
    ],
    importantInfo: [
      'Panic attacks are not a sign of weakness and can happen to anyone.',
      'Recurrent panic attacks may indicate a panic disorder, which can be treated with therapy and/or medication.',
      'Encourage the person to talk to a doctor or mental health professional if they experience frequent or debilitating panic attacks.'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=mkFBqjAG5xI'
  },
  'seizures': {
    title: 'Seizures & Epilepsy',
    emoji: '🤯',
    severity: 'high',
    estimatedTime: '5-15 minutes (during and after seizure)',
    steps: [
      {
        id: 1,
        title: 'Protect from Injury (During Seizure)',
        description: 'If the person is having a convulsive seizure (jerking movements): \n- Ease them to the floor if they are standing or sitting. \n- Clear the area around them of hard or sharp objects. \n- Place something soft (like a jacket or cushion) under their head. \n- Loosen any tight clothing around their neck.',
        image: 'Protecting a person during a convulsive seizure by clearing the area and cushioning their head',
        warning: 'Do NOT try to restrain their movements. Do NOT put anything in their mouth (they will not swallow their tongue).',
        tips: ['Note the time the seizure started.']
      },
      {
        id: 2,
        title: 'Turn on Side (After Jerking Stops or if Vomiting)',
        description: 'Once the convulsive movements stop, or if they vomit or have fluid in their mouth during the seizure, gently roll them onto their side (recovery position). This helps keep their airway clear and allows saliva or vomit to drain out.',
        image: 'Placing a person in the recovery position after a seizure',
        warning: 'Do this gently, being mindful of any potential injuries.',
        tips: ['Check their breathing.']
      },
      {
        id: 3,
        title: 'Stay with Them and Reassure',
        description: 'Stay with the person until they are fully awake and aware. They may be confused, sleepy, or agitated after a seizure. Speak calmly and reassuringly.',
        image: 'Staying with and reassuring a person who is recovering from a seizure',
        warning: 'Do not give them anything to eat or drink until they are fully alert.',
        tips: ['Offer comfort and help them orient themselves.']
      },
      {
        id: 4,
        title: 'Call Emergency Medical Help IF:',
        description: '- The seizure lasts longer than 5 minutes. \n- They have another seizure soon after the first one. \n- They are injured during the seizure. \n- They have trouble breathing or waking up after the seizure. \n- It is their first seizure. \n- They have a known medical condition like diabetes or heart disease, or are pregnant. \n- The seizure happened in water.',
        image: 'Calling emergency services for a seizure situation',
        warning: 'Most seizures stop on their own within a few minutes. Prolonged seizures (status epilepticus) are a medical emergency.',
        tips: ['Provide information about the seizure (length, type of movements) to medical personnel.']
      }
    ],
    importantInfo: [
      'Not all seizures involve convulsions. Some involve staring spells, confusion, or unusual sensations (focal seizures).',
      'People with known epilepsy may have a seizure management plan.',
      'It is helpful for people with epilepsy to wear medical identification.'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=Xure4Xex_dI'
  },
  'unconsciousness': {
    title: 'Unconsciousness & Fainting',
    emoji: '😵',
    severity: 'high', // Can vary, but always assess seriously
    estimatedTime: '5-10 minutes (initial assessment and care)',
    steps: [
      {
        id: 1,
        title: 'Check for Dangers & Responsiveness',
        description: 'Ensure the area is safe for you and the person. Gently tap or shake their shoulders and ask loudly, "Are you okay?".',
        image: 'Checking for responsiveness by tapping shoulders and shouting',
        warning: 'If you suspect a head, neck, or back injury, do not move them unless absolutely necessary for safety.',
        tips: ['Look for obvious signs of injury or cause (e.g., bleeding, medical alert bracelet).']
      },
      {
        id: 2,
        title: 'Call for Emergency Help',
        description: 'If the person does not respond, they are unconscious. Call 911 or your local emergency number immediately. If someone else is present, ask them to call while you attend to the person.',
        image: 'Calling emergency services for an unconscious person',
        warning: 'Unconsciousness is always a medical emergency.',
        tips: ['Provide clear information about your location and the situation.']
      },
      {
        id: 3,
        title: 'Check for Breathing (and Pulse if Trained)',
        description: 'Tilt their head back slightly and lift their chin to open the airway (unless neck injury suspected - then use jaw thrust). Look, listen, and feel for normal breathing for no more than 10 seconds. If you are trained, you can also check for a pulse.',
        image: 'Checking for breathing on an unconscious person',
        warning: 'Gasping or occasional snorts are not normal breathing.',
        tips: ['If not breathing normally, be prepared to start CPR.']
      },
      {
        id: 4,
        title: 'If Breathing Normally: Recovery Position',
        description: 'If they are breathing normally and have no suspected spinal injury, place them in the recovery position (on their side, with top leg bent for support, head tilted back slightly to keep airway open). This helps prevent choking if they vomit.',
        image: 'Placing an unconscious but breathing person in the recovery position',
        warning: 'Monitor their breathing continuously until help arrives.',
        tips: ['Keep them warm. Loosen any tight clothing.']
      },
      {
        id: 5,
        title: 'If NOT Breathing Normally: Start CPR',
        description: 'If the person is not breathing normally (or only gasping), start Cardiopulmonary Resuscitation (CPR) immediately. If an AED is available, use it as soon as possible following its instructions.',
        image: 'Starting CPR on an unconscious, non-breathing person',
        warning: 'Continue CPR until professional help takes over, the person starts breathing, or you are too exhausted to continue.',
        tips: ['Push hard and fast in the center of the chest (100-120 compressions/min).']
      }
    ],
    importantInfo: [
      'Fainting (syncope) is a brief loss of consciousness, often due to a temporary drop in blood flow to the brain. People usually recover quickly. If someone feels faint, have them lie down or sit with their head between their knees.',
      'Causes of unconsciousness are varied (e.g., head injury, stroke, heart attack, diabetic emergency, overdose, seizure).',
      'Even if someone faints and recovers quickly, they should be checked by a doctor, especially if it\'s the first time or there are other symptoms.'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=diAII5s2qLk' 
  },
  'heatstroke': {
    title: 'Heatstroke & Dehydration',
    emoji: '☀️',
    severity: 'high', // Heatstroke is critical
    estimatedTime: 'Immediate action for heatstroke',
    steps: [
      {
        id: 1,
        title: 'Recognize Heatstroke (Medical Emergency)',
        description: 'Heatstroke is life-threatening. Symptoms include: \n- High body temperature (103°F / 39.4°C or higher) \n- Hot, red, dry OR damp skin \n- Rapid, strong pulse OR slow, weak pulse \n- Headache, dizziness, nausea \n- Confusion, agitation, slurred speech, loss of consciousness, seizures.',
        image: 'Person exhibiting signs of heatstroke (red, hot skin, confusion)',
        warning: 'Heatstroke requires IMMEDIATE cooling and emergency medical attention. Call 911.',
        tips: ['Heat exhaustion can precede heatstroke. Symptoms of heat exhaustion: heavy sweating, cold/pale/clammy skin, muscle cramps, tiredness, dizziness, headache, nausea. Move to a cool place and sip water for heat exhaustion.']
      },
      {
        id: 2,
        title: 'Call Emergency Services for Heatstroke',
        description: 'If you suspect heatstroke, call 911 or your local emergency number immediately. This is a medical emergency.',
        image: 'Calling emergency services for someone with heatstroke',
        warning: 'Do not delay calling for help.',
        tips: ['Provide details about the person\'s condition and that you suspect heatstroke.']
      },
      {
        id: 3,
        title: 'Move to a Cooler Place & Begin Cooling (Heatstroke)',
        description: 'Move the person to a cooler, shaded area or an air-conditioned space. Begin rapid cooling: \n- Immerse in a tub of cool (not ice-cold) water if possible. \n- Spray with cool water and fan them. \n- Apply cool, wet cloths or ice packs to the head, neck, armpits, and groin.',
        image: 'Cooling a person with heatstroke using wet cloths and fanning',
        warning: 'Do NOT give fluids if the person is confused, losing consciousness, or having seizures. Do not use alcohol rubs.',
        tips: ['Remove excess clothing.']
      },
      {
        id: 4,
        title: 'Dehydration Management (If Conscious & Not Severe)',
        description: 'For dehydration (thirst, dry mouth, dark urine, fatigue, dizziness): \n- Move to a cool place and rest. \n- Sip water or an oral rehydration solution (ORS) or sports drink slowly. \n- Avoid sugary drinks, caffeine, and alcohol.',
        image: 'Person sipping water to rehydrate in a cool place',
        warning: 'Severe dehydration (confusion, fainting, inability to keep fluids down) needs medical attention.',
        tips: ['Eat salty snacks if available and tolerated with water.']
      }
    ],
    importantInfo: [
      'Heatstroke can cause brain damage or death if not treated promptly.',
      'Prevent heat-related illnesses: stay hydrated, avoid strenuous activity during hottest parts of the day, wear light/loose clothing, take breaks in cool areas.',
      'Vulnerable individuals: infants, elderly, people with chronic illnesses, outdoor workers, athletes.'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=PpHyKxT9oGg'
  },
  'food-poisoning': {
    title: 'Food Poisoning',
    emoji: '🤢',
    severity: 'medium',
    estimatedTime: 'Ongoing (symptom management)',
    steps: [
      {
        id: 1,
        title: 'Recognize Symptoms',
        description: 'Common symptoms include nausea, vomiting, diarrhea, abdominal cramps, and sometimes fever. Symptoms can appear within hours or days after eating contaminated food.',
        image: 'Person clutching stomach, looking unwell due to food poisoning',
        warning: 'Symptoms can range from mild to severe.',
        tips: ['Try to recall what foods were eaten recently.']
      },
      {
        id: 2,
        title: 'Stay Hydrated',
        description: 'Vomiting and diarrhea can lead to dehydration. Sip small amounts of clear fluids frequently (water, oral rehydration solution, clear broths, diluted fruit juice). Avoid milk, caffeine, and alcohol.',
        image: 'Person sipping clear fluids to stay hydrated',
        warning: 'If unable to keep any fluids down for several hours, or if signs of severe dehydration appear (little/no urination, extreme thirst, dizziness), seek medical attention.',
        tips: ['Ice chips can also help if sipping is difficult.']
      },
      {
        id: 3,
        title: 'Rest and Eat Bland Foods (When Tolerated)',
        description: 'Rest allows your body to recover. When you feel able to eat, start with bland, easy-to-digest foods like bananas, rice, applesauce, toast (BRAT diet), crackers, or boiled potatoes. Avoid fatty, spicy, or dairy-rich foods initially.',
        image: 'Bowl of plain rice, representing bland food for recovery',
        warning: 'Do not force yourself to eat if you are still nauseous.',
        tips: ['Gradually return to a normal diet as symptoms improve.']
      },
      {
        id: 4,
        title: 'Seek Medical Attention IF:',
        description: '- Symptoms are severe (e.g., frequent vomiting, high fever, severe abdominal pain, bloody diarrhea). \n- Symptoms last more than a few days. \n- There are signs of severe dehydration. \n- The person is very young, elderly, pregnant, or has a weakened immune system. \n- You suspect botulism (rare but serious: muscle weakness, difficulty breathing/swallowing, blurred vision).',
        image: 'Person on phone with doctor or at a clinic for severe food poisoning symptoms',
        warning: 'Botulism is a medical emergency.',
        tips: ['If others who ate the same food are also sick, it helps confirm food poisoning. Report suspected outbreaks to your local health department.']
      }
    ],
    importantInfo: [
      'Most cases of food poisoning resolve on their own within a few days.',
      'Practice food safety to prevent food poisoning: cook foods thoroughly, wash hands and surfaces often, avoid cross-contamination, refrigerate perishable foods promptly.',
      'Do not take anti-diarrheal medication without consulting a doctor, as it can sometimes prolong the illness by keeping bacteria in the system.'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=U2YhTr3nZqU'
  },
  'alcohol-poisoning': {
    title: 'Alcohol Poisoning',
    emoji: '🍺',
    severity: 'high', // Potentially critical
    estimatedTime: 'Immediate action required',
    steps: [
      {
        id: 1,
        title: 'Recognize Signs of Alcohol Poisoning',
        description: 'Symptoms include: \n- Confusion, stupor (difficult to awaken) \n- Vomiting (especially while passed out) \n- Seizures \n- Slow or irregular breathing (less than 8 breaths a minute, or gaps of more than 10 seconds between breaths) \n- Cold, clammy, pale, or bluish skin \n- Loss of consciousness, unresponsiveness.',
        image: 'Unresponsive person showing signs of alcohol poisoning (pale skin, slow breathing)',
        warning: 'Alcohol poisoning is a medical emergency. It can lead to coma, brain damage, or death.',
        tips: ['Do not assume someone will "sleep it off."']
      },
      {
        id: 2,
        title: 'Call Emergency Services Immediately',
        description: 'If you suspect alcohol poisoning, call 911 or your local emergency number without delay. Do not wait for all symptoms to be present.',
        image: 'Calling emergency services for someone with suspected alcohol poisoning',
        warning: 'Time is critical. Prompt medical help can be life-saving.',
        tips: ['Be prepared to tell the dispatcher the person\'s symptoms, how much alcohol they consumed (if known), and any other substances they might have taken.']
      },
      {
        id: 3,
        title: 'Do NOT Leave the Person Alone',
        description: 'Stay with the person until help arrives. Monitor their breathing and level of consciousness.',
        image: 'Staying with and monitoring an unconscious person while waiting for help',
        warning: 'Never try to make the person vomit. This can cause choking.',
        tips: ['Gather any information about what and how much they drank.']
      },
      {
        id: 4,
        title: 'Place in Recovery Position (If Unconscious but Breathing)',
        description: 'If the person is unconscious but breathing, carefully roll them onto their side into the recovery position. This helps prevent choking if they vomit.',
        image: 'Placing an unconscious person in the recovery position',
        warning: 'Do NOT give them food, drink (including coffee), or try to make them walk. These can be dangerous.',
        tips: ['Keep them warm if they feel cold.']
      }
    ],
    importantInfo: [
      'Factors influencing alcohol poisoning risk: amount and speed of alcohol consumption, body weight, gender, food in stomach, other drugs/medications.',
      'Binge drinking (consuming large amounts of alcohol in a short period) significantly increases risk.',
      'Even after someone stops drinking, their blood alcohol content can continue to rise as alcohol is absorbed from the stomach and intestines.'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=DKEPzXR22yU'
  },
  'drug-overdose': {
    title: 'Drug Overdose',
    emoji: '💊',
    severity: 'critical',
    estimatedTime: 'Immediate action required',
    steps: [
      {
        id: 1,
        title: 'Recognize Signs of Overdose (Varies by Drug)',
        description: 'Symptoms depend on the drug but can include: \n- Opioids (heroin, fentanyl, prescription painkillers): Slow/shallow/stopped breathing, blue lips/fingernails, pinpoint pupils, unresponsiveness, gurgling sounds. \n- Stimulants (cocaine, meth): Rapid heart rate, chest pain, seizures, agitation, paranoia, high body temperature. \n- Depressants (benzodiazepines, alcohol): Drowsiness, confusion, slurred speech, poor coordination, slowed breathing, unresponsiveness.',
        image: 'Person showing signs of opioid overdose (blue lips, unresponsive)',
        warning: 'Any suspected overdose is a medical emergency. Different drugs require different interventions.',
        tips: ['Look for drug paraphernalia, pill bottles, or other clues.']
      },
      {
        id: 2,
        title: 'Call Emergency Services Immediately',
        description: 'Call 911 or your local emergency number right away. Tell them you suspect an overdose, the person\'s symptoms, and if you know what drug(s) they took. Provide your location.',
        image: 'Calling emergency services for a suspected drug overdose',
        warning: 'Do not delay. Good Samaritan laws in many places protect people who call for help in an overdose situation.',
        tips: ['Be honest with dispatchers so they can provide the best help.']
      },
      {
        id: 3,
        title: 'Administer Naloxone (Narcan) IF AVAILABLE & Opioid Overdose Suspected',
        description: 'If you suspect an opioid overdose and have naloxone (Narcan), administer it according to its instructions (usually a nasal spray or injection). Naloxone can temporarily reverse an opioid overdose. It will not harm someone if they haven\'t taken opioids.',
        image: 'Administering naloxone nasal spray to someone with an opioid overdose',
        warning: 'Naloxone is temporary. The person still needs immediate medical attention as the overdose can return when naloxone wears off. Call 911 even if naloxone is given.',
        tips: ['Naloxone is available without a prescription in many areas. Learn how to use it if you or someone you know is at risk.']
      },
      {
        id: 4,
        title: 'Check Breathing & Provide Care Until Help Arrives',
        description: 'Stay with the person. If they are unresponsive and not breathing or only gasping, start CPR if you are trained. If they are breathing, place them in the recovery position to prevent choking if they vomit. Do not try to make them vomit or give them food/drink.',
        image: 'Performing rescue breathing or CPR on an overdose victim',
        warning: 'Do not put them in a cold shower or try to make them walk it off; these methods are ineffective and can be harmful.',
        tips: ['Keep them warm. Reassure them if they become conscious but agitated.']
      }
    ],
    importantInfo: [
      'Fentanyl is a very powerful synthetic opioid often mixed with other drugs, increasing overdose risk.',
      'Mixing drugs (including alcohol) significantly increases overdose risk.',
      'If you or someone you know struggles with substance use, resources are available for help and treatment.'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=TpHKzYvz_oU' // General overdose response, Naloxone use
  },
  'chemical-poisoning': {
    title: 'Chemical Poisoning (Swallowed, Inhaled, Skin/Eye Contact)',
    emoji: '🧪',
    severity: 'high', // Potentially critical
    estimatedTime: 'Immediate action required',
    steps: [
      {
        id: 1,
        title: 'Ensure Safety & Identify Chemical (If Possible)',
        description: 'Make sure the area is safe to approach. If a chemical is spilled, avoid contact. If fumes are present, move to fresh air. Try to identify the chemical (read the label on the container). Call Poison Control (e.g., 1-800-222-1222 in the US) or emergency services immediately.',
        image: 'Person reading a chemical label carefully, another person on phone for help',
        warning: 'Do not enter an area with strong chemical fumes without protection. Different chemicals require different first aid.',
        tips: ['Have the chemical container or label available when you call for help.']
      },
      {
        id: 2,
        title: 'If Chemical Swallowed',
        description: 'Call Poison Control or 911 immediately. Follow their specific instructions. Do NOT induce vomiting unless instructed to do so by a medical professional. If the person is conscious and able, give them small sips of water or milk if advised by Poison Control.',
        image: 'Person on phone with Poison Control after suspected chemical ingestion',
        warning: 'Inducing vomiting can be harmful with corrosive substances as it causes re-exposure to the esophagus.',
        tips: ['Note the time of ingestion and amount if known.']
      },
      {
        id: 3,
        title: 'If Chemical Inhaled',
        description: 'Immediately move the person to fresh air. If they are not breathing or having difficulty breathing, call 911 and start CPR if needed and trained. Loosen tight clothing.',
        image: 'Moving someone who inhaled chemical fumes to fresh air outdoors',
        warning: 'Some inhaled chemicals can cause delayed lung damage.',
        tips: ['Ventilate the area if safe to do so.']
      },
      {
        id: 4,
        title: 'If Chemical on Skin or Eyes',
        description: 'Skin: Remove contaminated clothing (cut it off if necessary to avoid pulling over the head). Flush the affected skin with copious amounts of running water for at least 15-20 minutes. \nEyes: Immediately flush the eye(s) with lukewarm running water for 15-20 minutes. Hold eyelids open. Tilt head so water runs away from unaffected eye. Call 911 or Poison Control during or after flushing.',
        image: 'Flushing skin with water after chemical exposure / Flushing an eye with an eyewash station or tap',
        warning: 'Do not try to neutralize a chemical on skin or eyes with another chemical unless specifically instructed by hazardous materials experts.',
        tips: ['Use a shower if large areas of skin are affected. For eyes, ensure continuous gentle flow of water.']
      }
    ],
    importantInfo: [
      'Always follow the instructions from Poison Control or emergency medical personnel.',
      'Bring the chemical container or label to the hospital if the person needs to go.',
      'Store chemicals safely, out of reach of children, and in their original containers. Read labels before use.'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=3Q2KqNcX0Yc' // General chemical safety/response
  },
  'plant-ingestion': {
    title: 'Poisonous Plant Ingestion',
    emoji: '☘️',
    severity: 'medium', // Can be high depending on plant
    estimatedTime: 'Immediate action for advice',
    steps: [
      {
        id: 1,
        title: 'Identify the Plant (If Possible) & Remove from Mouth',
        description: 'If you see the person eating a plant, remove any remaining plant parts from their mouth. Try to identify the plant (take a sample or photo if safe and possible, but don\'t delay getting help).',
        image: 'Removing plant parts from a child\'s mouth, trying to identify the plant from a nearby specimen',
        warning: 'Do not taste the plant yourself to identify it.',
        tips: ['Note how much of the plant was eaten and which parts (leaves, berries, stem).']
      },
      {
        id: 2,
        title: 'Call Poison Control or Emergency Services',
        description: 'Call your local Poison Control center (e.g., 1-800-222-1222 in the US) or 911 immediately. Provide the plant name (if known), description, parts eaten, amount, and the person\'s age, weight, and symptoms.',
        image: 'Parent on phone with Poison Control, child nearby',
        warning: 'Do not wait for symptoms to develop. Some plant toxins have delayed effects.',
        tips: ['Follow their instructions precisely.']
      },
      {
        id: 3,
        title: 'Do NOT Induce Vomiting (Unless Instructed)',
        description: 'Do not make the person vomit unless specifically told to do so by Poison Control or a medical professional. Some plants can cause more harm if vomited.',
        image: 'Symbol of "no vomiting" - crossed out person vomiting',
        warning: 'Many common household and garden plants can be toxic if ingested.',
        tips: ['If advised, give small sips of water or milk to dilute the poison, but only if the person is conscious and can swallow.']
      },
      {
        id: 4,
        title: 'Monitor for Symptoms',
        description: 'Watch for symptoms like nausea, vomiting, diarrhea, abdominal pain, rash, difficulty breathing or swallowing, confusion, seizures, or changes in heart rate. Report any symptoms to Poison Control or medical personnel.',
        image: 'Monitoring a child for symptoms after potential plant ingestion',
        warning: 'If the person becomes unconscious or has difficulty breathing, call 911 immediately and be prepared for CPR.',
        tips: ['Bring a sample of the plant to the hospital if you go.']
      }
    ],
    importantInfo: [
      'Many plants are toxic to humans and pets. Keep poisonous plants out of reach of children and pets.',
      'Teach children not to put unknown plants, berries, or mushrooms in their mouths.',
      'Be aware of common poisonous plants in your home, garden, and local environment.'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=D2Y8Q0gN4Xw' // General plant poisoning advice
  },
  'carbon-monoxide': {
    title: 'Carbon Monoxide Poisoning',
    emoji: '🚗',
    severity: 'critical',
    estimatedTime: 'Immediate action required',
    steps: [
      {
        id: 1,
        title: 'Recognize Symptoms & Danger',
        description: 'Carbon Monoxide (CO) is an odorless, colorless gas. Symptoms can be flu-like: headache, dizziness, weakness, nausea, vomiting, chest pain, confusion. High levels can cause loss of consciousness and death. Multiple people in the same enclosed space getting sick simultaneously is a red flag.',
        image: 'Illustration of CO gas source (e.g., faulty furnace) and person feeling unwell',
        warning: 'CO poisoning can happen quickly and without obvious warning signs.',
        tips: ['Symptoms can be vague and easily mistaken for other illnesses.']
      },
      {
        id: 2,
        title: 'Move to Fresh Air Immediately',
        description: 'If you suspect CO poisoning, get everyone (including pets) out of the building or enclosed space and into fresh air immediately. Open doors and windows on your way out if you can do so quickly and safely.',
        image: 'People evacuating a house into fresh air due to suspected CO',
        warning: 'Do not re-enter the building until it has been cleared by professionals.',
        tips: ['If someone is unconscious, try to move them to fresh air if you can do so safely without becoming a victim yourself.']
      },
      {
        id: 3,
        title: 'Call Emergency Services & Report CO',
        description: 'Call 911 or your local emergency number from outside the building. Tell them you suspect carbon monoxide poisoning. The fire department often responds to CO calls.',
        image: 'Person calling 911 from outside a building, reporting CO poisoning',
        warning: 'All individuals exposed to CO need medical evaluation, even if symptoms seem mild or improve with fresh air.',
        tips: ['Do not assume it is safe just because you feel better outside.']
      },
      {
        id: 4,
        title: 'Provide Care & Monitor',
        description: 'If someone is unresponsive and not breathing, start CPR if you are trained. Keep victims calm and still. Oxygen therapy is the primary treatment for CO poisoning, which will be administered by medical professionals.',
        image: 'Paramedic administering oxygen to a CO poisoning victim',
        warning: 'Long-term health problems can result from CO poisoning even after initial recovery.',
        tips: ['Inform medical staff about the suspected CO exposure.']
      }
    ],
    importantInfo: [
      'Install CO detectors on every level of your home, especially near sleeping areas. Test them regularly and replace batteries.',
      'Have fuel-burning appliances (furnaces, water heaters, stoves, fireplaces, generators) inspected annually by a qualified technician.',
      'Never use generators, charcoal grills, camp stoves, or other gasoline/charcoal-burning devices inside your home, basement, garage, or near a window.',
      'Never run a car or truck inside an attached garage, even with the door open.'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=uVQ4hB4hJqE'
  },
  'earthquake-survival': {
    title: 'Earthquake Survival Guide',
    emoji: '🏠',
    severity: 'high',
    estimatedTime: 'During and immediately after shaking',
    steps: [
      {
        id: 1,
        title: 'If Indoors: Drop, Cover, and Hold On',
        description: 'DROP to your hands and knees. COVER your head and neck with your arms, and if possible, get under a sturdy table or desk. HOLD ON to your shelter (or to your head and neck) until shaking stops.',
        image: 'Person under a sturdy table during an earthquake (Drop, Cover, Hold On)',
        warning: 'Stay away from windows, glass, outside walls, and anything that could fall (bookcases, light fixtures). Do NOT run outside during shaking.',
        tips: ['If no shelter is nearby, get against an interior wall and cover your head and neck.']
      },
      {
        id: 2,
        title: 'If Outdoors: Move to an Open Area',
        description: 'Move away from buildings, streetlights, and utility wires. Drop to the ground and stay there until shaking stops.',
        image: 'Person in an open outdoor area, away from buildings, during an earthquake',
        warning: 'The greatest danger is directly outside buildings at exits and along exterior walls due to falling debris.',
        tips: ['Be aware of potential tsunamis if in a coastal area after a strong earthquake.']
      },
      {
        id: 3,
        title: 'If in a Vehicle: Pull Over and Stop',
        description: 'Pull over to a clear location away from buildings, trees, overpasses, and utility wires. Stay in the vehicle with your seatbelt on until shaking stops. Then proceed cautiously, watching for road and bridge damage.',
        image: 'Car pulled over to the side of the road during an earthquake',
        warning: 'Avoid stopping under bridges, overpasses, or power lines.',
        tips: ['Turn on the radio for emergency information.']
      },
      {
        id: 4,
        title: 'After Shaking Stops: Check for Injuries & Hazards',
        description: 'Check yourself and others for injuries. Provide first aid if needed. Be prepared for aftershocks. Check for gas leaks (smell of gas, hissing sound - if so, open windows, leave immediately, and report it), electrical damage (sparks, frayed wires - turn off main power if safe), and water damage. Extinguish small fires if safe.',
        image: 'People checking for injuries and hazards after an earthquake',
        warning: 'Do not use matches, lighters, or turn on electrical switches if you suspect a gas leak. Use a flashlight.',
        tips: ['Listen to a battery-operated radio or TV for emergency updates. Use the phone only for emergencies.']
      }
    ],
    importantInfo: [
      'Have an emergency kit prepared with water, food, first aid supplies, flashlight, batteries, whistle, etc.',
      'Secure heavy items in your home (bookcases, water heaters) to prevent them from falling.',
      'Know safe spots in each room and practice earthquake drills with your family or colleagues.'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=RYi7n90rY9E'
  },
  'flood-rescue': {
    title: 'Flood Rescue Guide',
    emoji: '🌊',
    severity: 'high',
    estimatedTime: 'During and after flooding',
    steps: [
      {
        id: 1,
        title: 'Monitor Alerts & Evacuate if Advised',
        description: 'Pay attention to weather alerts (radio, TV, official apps). If evacuation orders are issued for your area, leave immediately. Follow designated evacuation routes.',
        image: 'Family evacuating their home with emergency kits during a flood warning',
        warning: 'Do not wait until it\'s too late. Floods can develop rapidly.',
        tips: ['Have an emergency plan and kit ready. Know your flood risk.']
      },
      {
        id: 2,
        title: 'Never Drive or Walk Through Floodwaters',
        description: 'It takes very little moving water to sweep away a car or a person. Floodwaters can be deeper and faster than they appear and may hide debris or road damage. Turn Around, Don\'t Drown®.',
        image: 'Car stuck in floodwater, with "Turn Around Don\'t Drown" sign',
        warning: 'Most flood-related deaths occur from driving into floodwaters.',
        tips: ['Find an alternative route or wait for waters to recede.']
      },
      {
        id: 3,
        title: 'If Trapped in a Building: Move to Higher Ground',
        description: 'If your home or building is flooding, move to the highest level (attic, roof - but only if necessary and you can signal for help). Do NOT go into a closed attic where you could be trapped by rising water. Take your emergency kit.',
        image: 'People on a rooftop signaling for help during a flood',
        warning: 'Avoid contact with floodwater as it may be contaminated with sewage, chemicals, or electrically charged from downed power lines.',
        tips: ['Call emergency services and tell them your location. Signal for help.']
      },
      {
        id: 4,
        title: 'After a Flood: Safety First',
        description: 'Wait for authorities to declare it safe before returning home. Check for structural damage before entering. Be aware of hazards like snakes, insects, contaminated water/mud, and electrical dangers. Wear protective clothing.',
        image: 'Person cautiously entering a flood-damaged home wearing protective gear',
        warning: 'Throw away food that has come into contact with floodwater. Boil drinking water until authorities say it\'s safe.',
        tips: ['Document damage for insurance purposes. Clean and disinfect everything that got wet.']
      }
    ],
    importantInfo: [
      'Have flood insurance if you live in a flood-prone area (standard homeowner\'s insurance usually doesn\'t cover floods).',
      'Know how to turn off utilities (gas, electricity, water) at the main switches or valves.',
      'Flash floods can occur with little or no warning, especially in hilly areas or after heavy rain.'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=3iK5qS_m04A'
  },
  'tornado-safety': {
    title: 'Tornado Safety',
    emoji: '🌪️',
    severity: 'high',
    estimatedTime: 'During a tornado warning',
    steps: [
      {
        id: 1,
        title: 'Recognize Tornado Warnings & Signs',
        description: 'Pay attention to tornado watches (conditions are favorable) and warnings (tornado sighted or indicated by radar). Natural signs include: dark greenish sky, large hail, a loud roar like a freight train. Seek shelter immediately if a warning is issued or you see these signs.',
        image: 'Illustration of a tornado funnel cloud with dark sky',
        warning: 'Tornadoes can develop rapidly with little warning.',
        tips: ['Have a weather radio or app that provides alerts for your area.']
      },
      {
        id: 2,
        title: 'If Indoors: Go to a Safe Room/Basement/Interior Room',
        description: 'The safest place is a designated storm shelter, basement, or safe room. If not available, go to an interior room or hallway on the lowest level, away from windows, doors, and outside walls. Get under a sturdy piece of furniture (table, desk) and cover your head and neck with your arms or a blanket/mattress.',
        image: 'Family taking shelter in a basement or interior room during a tornado',
        warning: 'Avoid rooms with large roof spans (auditoriums, gymnasiums). Do NOT open windows.',
        tips: ['In a high-rise, go to an interior hallway on the lowest floor possible.']
      },
      {
        id: 3,
        title: 'If in a Mobile Home or Vehicle: Evacuate & Find Sturdy Shelter',
        description: 'Mobile homes and vehicles are NOT safe during a tornado. Abandon them immediately and go to the nearest sturdy building or designated storm shelter. If no sturdy shelter is available, lie flat in a nearby ditch or depression, covering your head with your hands. Be aware of potential flooding.',
        image: 'People evacuating a mobile home for a sturdier shelter during a tornado warning',
        warning: 'Do NOT try to outrun a tornado in a car in urban/congested areas. Do NOT seek shelter under an overpass (wind speeds can be higher there).',
        tips: ['Have a plan for where to shelter if you live in a mobile home.']
      },
      {
        id: 4,
        title: 'If Outdoors with No Shelter: Lie Flat in a Ditch',
        description: 'If caught outdoors with no sturdy shelter nearby, lie flat in the lowest-lying area available (ditch, ravine) and cover your head and neck with your arms. Be alert for flying debris and potential flooding.',
        image: 'Person lying flat in a ditch covering their head during a tornado',
        warning: 'This is a last resort and offers minimal protection. Flying debris is a major hazard.',
        tips: ['Try to get as far away from trees and cars as possible.']
      },
      {
        id: 5,
        title: 'After the Tornado: Stay Cautious',
        description: 'Stay in your shelter until authorities say it is safe. Watch out for downed power lines, broken glass, sharp objects, and unstable structures. Help injured people if you can do so safely. Listen to emergency radio for updates.',
        image: 'People carefully emerging from shelter after a tornado, observing damage',
        warning: 'Do not enter damaged buildings until they are declared safe.',
        tips: ['Report downed power lines or gas leaks to utility companies immediately.']
      }
    ],
    importantInfo: [
      'Practice tornado drills with your family/colleagues. Know your designated shelter areas.',
      'Have an emergency kit with essentials.',
      'Tornadoes can occur at any time of year, but are most common in spring and summer.'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=xJGw9A089xY'
  },
   'landslide': {
    title: 'Landslide Emergency Steps',
    emoji: '⛰️',
    severity: 'high',
    estimatedTime: 'During and after event',
    steps: [
      {
        id: 1,
        title: 'Recognize Landslide Warning Signs',
        description: 'Signs of potential landslides include: new cracks or bulges in the ground, pavement, or foundations; tilted trees, poles, or fences; sudden changes in water flow (springs, seeps); soil moving away from foundations; unusual sounds like rumbling or trees cracking.',
        image: 'Illustration of warning signs like ground cracks and tilted trees on a slope',
        warning: 'Landslides can be triggered by heavy rain, earthquakes, volcanic activity, or human modifications to land.',
        tips: ['Be especially alert during and after intense rainfall or snowmelt.']
      },
      {
        id: 2,
        title: 'Evacuate Immediately if Imminent Danger',
        description: 'If you suspect imminent danger or are advised to evacuate, do so immediately. Take pets and your emergency kit if possible. Move to higher, stable ground away from the slide path.',
        image: 'People evacuating an area at risk of a landslide, moving uphill',
        warning: 'Do not delay evacuation. Landslides can move quickly and without much warning.',
        tips: ['Follow designated evacuation routes if provided by authorities.']
      },
      {
        id: 3,
        title: 'If Caught in a Landslide (Indoors)',
        description: 'If you cannot evacuate, move to the part of the building furthest from the approaching slide. Get under a sturdy table or desk and hold on. Curl into a tight ball and protect your head.',
        image: 'Person taking cover under a table inside a building during a landslide',
        warning: 'Upper floors may be safer if the building is not directly in the path of a large, fast-moving slide, but this is situational.',
        tips: ['Listen for official information and instructions.']
      },
      {
        id: 4,
        title: 'If Caught in a Landslide (Outdoors)',
        description: 'Try to move quickly to higher ground, sideways away from the direct path of the debris flow. Run to the nearest high ground in a direction away from the path. If escape is not possible, curl into a tight ball and protect your head.',
        image: 'Person running uphill and sideways to escape an approaching landslide',
        warning: 'Avoid valleys and low-lying areas during and after heavy rain in landslide-prone regions.',
        tips: ['Grab onto something sturdy if possible, like a tree trunk.']
      },
      {
        id: 5,
        title: 'After a Landslide: Stay Away & Report',
        description: 'Stay away from the slide area; additional slides or collapses can occur. Check for injured or trapped persons (without entering the slide area yourself if unstable). Report the landslide to authorities and follow their instructions. Watch for flooding, as landslides can block rivers.',
        image: 'Emergency responders at a landslide site, people observing from a safe distance',
        warning: 'Do not return to an evacuated area until it is declared safe.',
        tips: ['Listen to emergency broadcasts for information.']
      }
    ],
    importantInfo: [
      'Know if you live in a landslide-prone area. Consult local geological surveys or planning departments.',
      'Consider professional advice for mitigating landslide risk on your property if you are in a high-risk zone.',
      'Have an emergency plan and communication strategy with your family.'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=kYeltgQCb3Y'
  },
  'forest-fire': {
    title: 'Forest Fire Safety',
    emoji: '🔥',
    severity: 'high',
    estimatedTime: 'During a fire threat',
    steps: [
      {
        id: 1,
        title: 'Monitor Fire Warnings & Prepare to Evacuate',
        description: 'Stay informed about fire conditions and warnings through local news, official emergency channels, or apps. If a wildfire is threatening your area, be prepared to evacuate immediately when orders are given ("Ready, Set, Go!" stages).',
        image: 'Person checking emergency alerts on phone, with emergency kit packed',
        warning: 'Wildfires can spread incredibly fast, driven by wind and dry conditions.',
        tips: ['Have an evacuation plan and a "go-kit" with essentials for each person and pet.']
      },
      {
        id: 2,
        title: 'Evacuate Early When Advised',
        description: 'When an evacuation order is issued, leave immediately. Follow designated evacuation routes. Leaving early prevents getting trapped by fire or road closures.',
        image: 'Cars evacuating an area with a wildfire in the distance',
        warning: 'Do not wait until the last minute. Visibility can drop quickly due to smoke.',
        tips: ['Inform someone outside the fire area where you are going. Take pets with you.']
      },
      {
        id: 3,
        title: 'If Trapped While Evacuating in a Vehicle',
        description: 'If caught in your car by fire, park in an area clear of vegetation if possible. Close windows and air vents. Lie on the floor of the car and cover yourself with a blanket or coat (wool is best). Call 911 if you have service and tell them your location.',
        image: 'Person lying on floor of car covered with blanket during wildfire entrapment',
        warning: 'This is a last resort. Avoid driving through heavy smoke or fire.',
        tips: ['Stay low to avoid heat and smoke.']
      },
      {
        id: 4,
        title: 'If Trapped on Foot',
        description: 'If caught on foot, try to find an area clear of vegetation (e.g., a ditch, depression, body of water if accessible and safe). Lie flat, face down, and cover your body and head, especially your airways (with a moist cloth if possible).',
        image: 'Person lying face down in a clearing, covering head during wildfire',
        warning: 'Running uphill can be slow. Fire often moves faster uphill. Try to move downhill or laterally if possible.',
        tips: ['Breathe shallowly through a cloth to filter smoke if possible.']
      },
      {
        id: 5,
        title: 'Protecting Your Home (If Time Allows & Safe)',
        description: 'If you have time BEFORE evacuating and it is safe: Close all windows, vents, and doors. Move flammable items (furniture, curtains) away from windows. Turn off gas/propane at the source. Leave lights on to help firefighters see your home through smoke. Wet down roof and vegetation near home if water is available and it is safe.',
        image: 'Person closing windows and moving flammable items inside home before evacuating for wildfire',
        warning: 'Your safety is paramount. Do not stay if evacuation orders are given or conditions become dangerous.',
        tips: ['Create defensible space around your home by clearing flammable vegetation regularly.']
      }
    ],
    importantInfo: [
      'Know your local fire risk and evacuation routes.',
      'Follow all burn bans and campfire restrictions.',
      'Report any unattended fires immediately to 911 or local fire department.'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=Zlik_4VGSsU'
  },
  'lightning-strike': {
    title: 'Lightning Strike Protection',
    emoji: '⚡',
    severity: 'high',
    estimatedTime: 'During a thunderstorm',
    steps: [
      {
        id: 1,
        title: 'Seek Safe Shelter Immediately',
        description: '"When Thunder Roars, Go Indoors!" Seek shelter in a substantial building (house, office, shop) or a hard-topped metal vehicle (car, van) with windows rolled up. Stay there for at least 30 minutes after the last clap of thunder.',
        image: 'People going inside a building during a thunderstorm / Person inside a car during lightning',
        warning: 'Small, open structures like picnic shelters, dugouts, or sheds are NOT safe. Avoid contact with metal surfaces or water inside your shelter.',
        tips: ['If you can hear thunder, you are close enough to be struck by lightning.']
      },
      {
        id: 2,
        title: 'If Outdoors & No Safe Shelter Nearby (Last Resort)',
        description: 'If caught outdoors far from safe shelter: \n- Avoid open fields, hilltops, or ridges. \n- Stay away from tall, isolated trees or objects (poles, towers). \n- Avoid water (lakes, pools, beaches). \n- Avoid metal objects (fences, bleachers, golf clubs). \n- If in a group, spread out. \n- Assume a lightning-safe position: crouch down, feet together, head tucked, hands over ears. Minimize contact with the ground.',
        image: 'Person in lightning-safe crouch position outdoors (last resort)',
        warning: 'This position does not guarantee safety but may reduce risk. There is NO completely safe place outdoors during a thunderstorm.',
        tips: ['Do not lie flat on the ground.']
      },
      {
        id: 3,
        title: 'Indoors Safety During a Thunderstorm',
        description: 'Once inside a safe building: \n- Stay away from windows and doors. \n- Do NOT use corded phones (cell phones/cordless are generally safe). \n- Do NOT use electrical appliances or computers. \n- Avoid plumbing: do not shower, bathe, wash dishes, or do laundry.',
        image: 'Person indoors during thunderstorm, away from windows and not using appliances',
        warning: 'Lightning can travel through electrical systems, plumbing, and phone lines.',
        tips: ['Wait 30 minutes after the last thunder before resuming outdoor activities or using vulnerable equipment.']
      },
      {
        id: 4,
        title: 'If Someone is Struck by Lightning',
        description: 'Call 911 immediately. People struck by lightning do NOT carry an electrical charge and are safe to touch. Check for breathing and pulse. If unresponsive and not breathing or only gasping, start CPR. If an AED is available, use it. Treat any burns or other injuries.',
        image: 'Person performing CPR on a lightning strike victim',
        warning: 'Lightning can cause cardiac arrest, burns, nerve damage, and other serious injuries.',
        tips: ['Move the victim to a safer place if there is ongoing lightning risk, but prioritize immediate life support.']
      }
    ],
    importantInfo: [
      'Monitor weather forecasts and be aware of thunderstorm development.',
      'Postpone outdoor activities if thunderstorms are predicted.',
      'The "30-30 Rule": If you see lightning and can\'t count to 30 before hearing thunder, get indoors. Stay indoors for 30 minutes after the last thunder.'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=yJXAE2f5UkY'
  },
  'cyclone': {
    title: 'Cyclone & Hurricane Survival',
    emoji: '🌪️🌊',
    severity: 'high',
    estimatedTime: 'Before, during, and after the storm',
    steps: [
      {
        id: 1,
        title: 'Prepare Before the Storm Season',
        description: 'Know your evacuation zone and routes. Have a disaster supply kit (water, non-perishable food, first aid, flashlight, batteries, medications, important documents). Secure your home (trim trees, secure loose items, consider storm shutters/plywood). Review insurance.',
        image: 'Family preparing a disaster kit and securing home for hurricane season',
        warning: 'Waiting until a storm is imminent can lead to shortages and long lines.',
        tips: ['Make a family communication plan.']
      },
      {
        id: 2,
        title: 'Monitor Storm & Obey Evacuation Orders',
        description: 'Track the storm through official channels (National Hurricane Center, local emergency management). If an evacuation order is issued for your area, leave immediately. Inform someone outside the storm area of your plans.',
        image: 'Person listening to emergency radio, with map showing evacuation route',
        warning: 'Storm surge (abnormal rise of water) is often the greatest threat to life during cyclones/hurricanes.',
        tips: ['Evacuate pets too. Fill your car\'s gas tank.']
      },
      {
        id: 3,
        title: 'If Staying Home (Only if NOT in an Evacuation Zone & Structure is Sound)',
        description: 'Board up windows and secure doors. Bring loose outdoor items inside. Fill bathtubs/containers with water for cleaning/flushing (not drinking, unless purified). Turn refrigerator to coldest setting. Stay in an interior room on the lowest floor not subject to flooding, away from windows and doors. Listen to radio for updates.',
        image: 'Person inside a secure interior room during a hurricane, away from windows',
        warning: 'If winds become extreme, go to your pre-identified safe room or get under sturdy furniture.',
        tips: ['Charge cell phones. Have non-electric light sources.']
      },
      {
        id: 4,
        title: 'During the Storm: Stay Indoors & Away from Windows',
        description: 'Remain indoors in your safe location. Do not go outside, even if it seems calm (you could be in the eye of the storm, with dangerous conditions returning). Stay away from windows, skylights, and glass doors.',
        image: 'Family huddled in an interior room during strong winds and rain',
        warning: 'Be alert for flooding, flying debris, and collapsing structures.',
        tips: ['Use flashlights, not candles, for light to avoid fire risk.']
      },
      {
        id: 5,
        title: 'After the Storm: Extreme Caution',
        description: 'Wait for authorities to declare it safe before going outside. Watch for downed power lines (assume all are live), flooding, unstable trees/buildings, snakes, and other hazards. Do not drive through flooded areas. Use generators safely (outdoors, away from windows/doors).',
        image: 'People cautiously assessing damage after a hurricane, avoiding downed power lines',
        warning: 'Many injuries occur after the storm. Be extremely careful.',
        tips: ['Report hazards. Check on neighbors (if safe). Document damage for insurance.']
      }
    ],
    importantInfo: [
      'Cyclones, hurricanes, and typhoons are different names for the same type of powerful tropical storm system.',
      'Inland flooding from heavy rain can be a major threat even far from the coast.',
      'The Saffir-Simpson Hurricane Wind Scale categorizes hurricanes by wind speed (Category 1-5).'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=S9i729c2n2c'
  },
  'hypothermia': {
    title: 'Hypothermia (Extreme Cold)',
    emoji: '❄️',
    severity: 'high',
    estimatedTime: 'Ongoing until warmed and stable',
    steps: [
      {
        id: 1,
        title: 'Recognize Symptoms of Hypothermia',
        description: 'Early signs: shivering, fatigue, confusion, slurred speech, loss of coordination. \nLate signs: shivering stops, blue skin, dilated pupils, slow pulse and breathing, loss of consciousness. Infants may have bright red, cold skin and very low energy.',
        image: 'Person shivering and looking confused, showing signs of hypothermia',
        warning: 'Hypothermia is a medical emergency where the body loses heat faster than it can produce it.',
        tips: ['Occurs more easily in elderly, infants, and those with certain medical conditions or who are wet/improperly dressed for cold.']
      },
      {
        id: 2,
        title: 'Call Emergency Services & Move to Warmth',
        description: 'Call 911 or your local emergency number immediately. Move the person to a warm, dry place. If outdoors, shelter from wind and cold as much as possible.',
        image: 'Moving a hypothermic person indoors or into a warm shelter',
        warning: 'Handle the person gently, as rough handling can trigger dangerous heart rhythms.',
        tips: ['Prevent further heat loss.']
      },
      {
        id: 3,
        title: 'Remove Wet Clothing & Begin Gentle Warming',
        description: 'Carefully remove any wet clothing and replace with dry, warm layers. Cover their head and neck. Use blankets, sleeping bags, or even body-to-body contact (skin-to-skin under blankets if necessary and appropriate).',
        image: 'Wrapping a hypothermic person in warm, dry blankets',
        warning: 'Do NOT rub or massage the person. Do NOT use direct heat like hot water, heating pads, or heat lamps as this can damage skin or cause irregular heartbeats. Warm the core first (chest, neck, head, groin).',
        tips: ['If conscious and able to swallow, offer warm (not hot), non-alcoholic, non-caffeinated drinks.']
      },
      {
        id: 4,
        title: 'Monitor Until Help Arrives',
        description: 'Stay with the person. Monitor their breathing, pulse, and level of consciousness. If they become unresponsive and stop breathing, start CPR if you are trained.',
        image: 'Monitoring a person being treated for hypothermia',
        warning: 'Even if the person seems to recover, they need medical evaluation.',
        tips: ['Rewarming can take time. Be patient and persistent with gentle warming methods.']
      }
    ],
    importantInfo: [
      'Dress in layers, wear a hat, gloves, and waterproof/windproof outer gear in cold weather.',
      'Stay dry; wet clothing significantly increases heat loss.',
      'Avoid alcohol before or during cold exposure as it impairs judgment and causes heat loss.'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=N3jftgI5tgo'
  },
  'frostbite': {
    title: 'Frostbite',
    emoji: '🥶',
    severity: 'medium', // Can be severe leading to amputation
    estimatedTime: 'Ongoing for rewarming and assessment',
    steps: [
      {
        id: 1,
        title: 'Recognize Signs of Frostbite',
        description: 'Affected skin may look pale, waxy, gray, or bluish. It may feel cold, hard, or numb. Blisters may form after rewarming. Common on fingers, toes, nose, ears, cheeks, chin.',
        image: 'Close-up of pale, waxy fingers indicating frostbite',
        warning: 'Superficial frostbite (frostnip) affects only skin surface; deeper frostbite involves underlying tissues.',
        tips: ['Initially, there may be aching or prickling, then numbness.']
      },
      {
        id: 2,
        title: 'Move to a Warm Place & Protect Area',
        description: 'Get the person indoors or to a warmer environment. Protect the frostbitten area from further cold and friction. Do NOT rub frostbitten skin or use snow on it.',
        image: 'Helping someone with frostbitten hands get indoors to a warm room',
        warning: 'Do NOT attempt to rewarm if there is a risk of re-freezing before reaching medical care, as this can cause more damage.',
        tips: ['Remove wet clothing and constricting items like rings.']
      },
      {
        id: 3,
        title: 'Gentle Rewarming (If No Risk of Re-freezing)',
        description: 'If medical care is not immediately available and no risk of re-freezing: Immerse the affected area in warm (not hot) water (100-105°F or 37-40.5°C) for 20-30 minutes, or until skin becomes flushed. Test water with an uninjured part to ensure it\'s not too hot. Alternatively, use warm compresses.',
        image: 'Gently rewarming frostbitten hands in a basin of warm water',
        warning: 'Rewarming can be very painful. Do NOT use dry heat (fire, heating pad, radiator) as numb skin can burn easily. Do not break blisters.',
        tips: ['Offer warm, non-alcoholic drinks if the person is conscious.']
      },
      {
        id: 4,
        title: 'After Rewarming: Dress & Seek Medical Care',
        description: 'Once rewarmed, gently pat dry. Apply sterile, non-stick dressings between fingers/toes if affected to keep them separated. Elevate the area slightly. All cases of frostbite (except very mild frostnip that fully recovers quickly) should be evaluated by a doctor.',
        image: 'Applying sterile dressings to rewarmed, frostbitten fingers',
        warning: 'Avoid walking on frostbitten feet if possible until medically assessed.',
        tips: ['Pain medication may be needed. Watch for signs of infection.']
      }
    ],
    importantInfo: [
      'Prevent frostbite: dress in layers, cover exposed skin (hat, mittens better than gloves, face mask), stay dry, limit time outdoors in extreme cold/wind.',
      'Hypothermia can accompany frostbite; treat hypothermia first if present.',
      'Smokers and people with circulatory problems are at higher risk.'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=0LPRm3304E4'
  },
  'heat-exhaustion': {
    title: 'Heat Exhaustion',
    emoji: '☀️',
    severity: 'medium',
    estimatedTime: '30 mins to 1 hour for initial cooling & rehydration',
    steps: [
      {
        id: 1,
        title: 'Recognize Symptoms of Heat Exhaustion',
        description: 'Symptoms include: heavy sweating, faintness or dizziness, fatigue, weak/rapid pulse, muscle cramps, headache, nausea or vomiting, cool/moist/pale skin (though can be flushed).',
        image: 'Person looking tired, sweaty, and pale, showing signs of heat exhaustion',
        warning: 'Heat exhaustion can progress to heatstroke if not treated. Heatstroke is a medical emergency.',
        tips: ['Often occurs after prolonged exposure to heat and humidity with inadequate fluid intake.']
      },
      {
        id: 2,
        title: 'Move to a Cooler Place & Rest',
        description: 'Immediately move the person to a cooler, shaded, or air-conditioned environment. Have them lie down with their legs slightly elevated if possible.',
        image: 'Person resting in a cool, shaded area with legs slightly elevated',
        warning: 'Stop all activity.',
        tips: ['Loosen or remove tight or excess clothing.']
      },
      {
        id: 3,
        title: 'Cool the Body',
        description: 'Apply cool, wet cloths or towels to the skin. Spraying with cool water and fanning can also help. A cool shower or bath is effective if the person is able.',
        image: 'Applying cool, wet cloths to a person\'s forehead and neck',
        warning: 'Avoid ice baths for heat exhaustion unless directed by medical professionals in severe cases, as rapid cooling can sometimes be problematic without supervision.',
        tips: ['Focus on cooling the head, neck, armpits, and groin.']
      },
      {
        id: 4,
        title: 'Rehydrate with Fluids',
        description: 'If the person is conscious and able to swallow, give them sips of cool water or a sports drink (that contains electrolytes). Avoid alcohol and caffeine.',
        image: 'Person sipping cool water slowly',
        warning: 'Do not give salt tablets unless directed by a doctor.',
        tips: ['If nausea prevents drinking, try small ice chips.']
      },
      {
        id: 5,
        title: 'Seek Medical Attention IF:',
        description: '- Symptoms worsen or do not improve within an hour. \n- The person faints, becomes confused, or shows signs of heatstroke (high body temp, hot/dry skin, rapid pulse, loss of consciousness). \n- They are unable to drink fluids. \n- They have underlying health conditions.',
        image: 'Calling for medical help as heat exhaustion symptoms are not improving',
        warning: 'If in doubt, always err on the side of seeking medical evaluation.',
        tips: ['Continue to monitor symptoms.']
      }
    ],
    importantInfo: [
      'Prevent heat exhaustion: stay hydrated (drink water before thirsty), avoid strenuous activity in extreme heat, wear light/loose clothing, take frequent breaks in cool places.',
      'Acclimatize gradually to hot environments.',
      'Certain medications can increase risk of heat illness.'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=FgmNkzfR34s'
  },
  'sunstroke': {
    title: 'Sunstroke (Heatstroke)',
    emoji: '🏜️',
    severity: 'high', // Same as Heatstroke, critical
    estimatedTime: 'Immediate emergency action required',
    steps: [
      {
        id: 1,
        title: 'Recognize Sunstroke (Heatstroke) - MEDICAL EMERGENCY',
        description: 'Sunstroke IS heatstroke caused by prolonged sun exposure. Symptoms: \n- Extremely high body temperature (103°F / 39.4°C or higher). \n- Hot, red, dry skin (sweating may have stopped). \n- Rapid, strong pulse. \n- Throbbing headache, dizziness, nausea. \n- Confusion, agitation, disorientation, slurred speech. \n- Loss of consciousness or seizures.',
        image: 'Person collapsed outdoors under strong sun, red dry skin, looking disoriented',
        warning: 'This is a life-threatening condition. Call 911 or your local emergency number IMMEDIATELY.',
        tips: ['Do not underestimate the severity. Act fast.']
      },
      {
        id: 2,
        title: 'Call Emergency Services Immediately',
        description: 'Dial 911 or your local emergency number without delay. Inform them you suspect sunstroke/heatstroke.',
        image: 'Someone urgently calling 911 for a sunstroke victim',
        warning: 'Prompt professional medical help is crucial for survival and minimizing complications.',
        tips: ['While waiting for help, start cooling measures.']
      },
      {
        id: 3,
        title: 'Move to Shade & Begin Rapid Cooling',
        description: 'Move the person to the nearest shaded and cooler area. Remove excess clothing. Begin cooling them rapidly: \n- Apply cool, wet cloths or towels to their body (head, neck, armpits, groin). \n- Spray or sponge them with cool water and fan vigorously. \n- If available and person is conscious enough, immerse in cool (not ice-cold) water.',
        image: 'People applying wet cloths and fanning a sunstroke victim in the shade',
        warning: 'Do NOT give fluids if the person is unconscious or having seizures. Avoid using alcohol for cooling.',
        tips: ['The goal is to lower body temperature as quickly as possible.']
      },
      {
        id: 4,
        title: 'Monitor and Support Until Help Arrives',
        description: 'Continuously monitor their breathing, pulse, and level of consciousness. If they become unresponsive and stop breathing, be prepared to start CPR. Keep cooling efforts ongoing.',
        image: 'Monitoring a sunstroke victim while continuing cooling measures until ambulance arrives',
        warning: 'Do not give aspirin or acetaminophen as these can be harmful in heatstroke.',
        tips: ['Position them to allow drainage if they vomit.']
      }
    ],
    importantInfo: [
      'Sunstroke/Heatstroke is the most severe form of heat illness.',
      'Prevention is key: limit sun exposure during peak hours (10 am - 4 pm), stay hydrated, wear hats and light clothing, take breaks in shade.',
      'Be especially careful with children, the elderly, and those with chronic health conditions in hot sun.'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=PpHyKxT9oGg' // Same as Heatstroke video
  }
};

export const commonEmergencies = [
  { id: 'burns', name: 'Burns', emoji: '🔥', color: 'bg-orange-100 text-orange-800' },
  { id: 'cuts-bleeding', name: 'Cuts & Bleeding', emoji: '🩸', color: 'bg-red-100 text-red-800' },
  { id: 'heart-attack', name: 'Heart Attack', emoji: '❤️', color: 'bg-red-100 text-red-800' },
  { id: 'choking', name: 'Choking', emoji: '🫁', color: 'bg-blue-100 text-blue-800' },
  { id: 'snake-bite', name: 'Snake Bite', emoji: '🐍', color: 'bg-green-100 text-green-800' }
];