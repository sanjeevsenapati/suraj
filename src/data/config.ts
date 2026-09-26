export const siteConfig = {
  trainerName: "Suraj",
  profession: "Gym Trainer & Nutritionist",
  tagline: "FITNESS • NUTRITION • PERFORMANCE",
  heroHeading: "BUILD YOUR BODY. BUILD YOUR MIND.",
  heroSubheading: "Personal Training & Nutrition Guidance by Suraj",
  heroDescription: "Train smarter. Eat better. Live stronger.",
  heroStats: [
    { value: "100%", label: "Personal Attention" },
    { value: "24/7", label: "Fitness Mindset" },
    { value: "1", label: "Goal — Your Progress" }
  ],
  contact: {
    phone: "+91 90045 17621",
    whatsapp: "+91 90045 17621",
    email: "suraj@example.com", // Placeholder
    instagram: "https://instagram.com/surajfitness",
    youtube: "https://youtube.com/surajfitness",
    facebook: "https://facebook.com/surajfitness",
    location: "Mumbai, India" // Placeholder
  },
  goals: [
    {
      id: "fat-loss",
      title: "FAT LOSS",
      description: "Burn fat while maintaining strength and muscle.",
      icon: "🔥",
      details: "Focus on caloric deficit, high protein intake, and a mix of strength training and cardio."
    },
    {
      id: "muscle-building",
      title: "MUSCLE BUILDING",
      description: "Build strength, muscle and a stronger physique.",
      icon: "💪",
      details: "Progressive overload, caloric surplus, and prioritizing compound lifts."
    },
    {
      id: "strength",
      title: "STRENGTH",
      description: "Improve power, performance and functional strength.",
      icon: "🏋️",
      details: "Low rep ranges, heavy weights, and adequate recovery periods."
    },
    {
      id: "general-fitness",
      title: "GENERAL FITNESS",
      description: "Improve stamina, mobility, strength and overall health.",
      icon: "🏃‍♂️",
      details: "A balanced approach combining cardio, strength, and mobility work."
    },
    {
      id: "weight-gain",
      title: "WEIGHT GAIN",
      description: "Build healthy body mass with proper training and nutrition.",
      icon: "📈",
      details: "Consistent caloric surplus with nutrient-dense foods and strength training."
    },
    {
      id: "flexibility-mobility",
      title: "FLEXIBILITY & MOBILITY",
      description: "Move better, recover better and improve movement quality.",
      icon: "🧘‍♂️",
      details: "Daily stretching, yoga, and targeted mobility drills before and after workouts."
    }
  ],
  workouts: [
    {
      level: "Beginner",
      focus: "Full Body",
      sets: "3 Sets",
      exercises: ["Squats", "Push-ups", "Dumbbell Row", "Lunges", "Plank"]
    },
    {
      level: "Intermediate",
      focus: "Upper Body",
      sets: "4 Sets",
      exercises: ["Bench Press", "Pull-ups", "Overhead Press", "Barbell Row", "Bicep Curls"]
    },
    {
      level: "Intermediate",
      focus: "Lower Body",
      sets: "4 Sets",
      exercises: ["Barbell Squats", "Romanian Deadlifts", "Leg Press", "Calf Raises", "Leg Extensions"]
    }
  ],
  exercises: [
    { name: "Push-Up", group: "Chest", difficulty: "Beginner", equipment: "None", benefits: "Builds chest, shoulders, and triceps", instructions: "Keep body straight, lower until chest almost touches floor, push back up." },
    { name: "Bench Press", group: "Chest", difficulty: "Intermediate", equipment: "Barbell", benefits: "Increases upper body strength and mass", instructions: "Lie on bench, lower bar to chest, press back up to start position." },
    { name: "Incline Dumbbell Press", group: "Chest", difficulty: "Intermediate", equipment: "Dumbbells", benefits: "Targets upper chest", instructions: "Set bench to 30-45 degrees, press dumbbells upward." },
    
    { name: "Pull-Up", group: "Back", difficulty: "Intermediate", equipment: "Pull-up Bar", benefits: "Develops lat width and upper back strength", instructions: "Hang from bar, pull yourself up until chin clears bar." },
    { name: "Lat Pulldown", group: "Back", difficulty: "Beginner", equipment: "Cable Machine", benefits: "Good alternative to pull-ups for beginners", instructions: "Pull bar down to upper chest, squeeze lats." },
    { name: "Dumbbell Row", group: "Back", difficulty: "Beginner", equipment: "Dumbbell, Bench", benefits: "Builds back thickness and fixes imbalances", instructions: "Support one side on bench, pull dumbbell up to hip." },
    
    { name: "Squat", group: "Legs", difficulty: "Intermediate", equipment: "Barbell", benefits: "King of leg exercises, builds overall leg mass", instructions: "Bar on back, squat down until hips are below knees, stand up." },
    { name: "Lunges", group: "Legs", difficulty: "Beginner", equipment: "Dumbbells/None", benefits: "Improves balance and unilateral leg strength", instructions: "Step forward, lower hips until both knees are bent at 90 degrees." },
    { name: "Romanian Deadlift", group: "Legs", difficulty: "Intermediate", equipment: "Barbell/Dumbbells", benefits: "Targets hamstrings and glutes", instructions: "Hinge at hips keeping legs slightly bent, lower weight, return." },
    
    { name: "Shoulder Press", group: "Shoulders", difficulty: "Beginner", equipment: "Dumbbells", benefits: "Builds overall shoulder mass", instructions: "Press weights overhead until arms are extended." },
    { name: "Lateral Raise", group: "Shoulders", difficulty: "Beginner", equipment: "Dumbbells", benefits: "Isolates side deltoids for wider shoulders", instructions: "Raise arms out to sides until parallel with floor." },
    { name: "Front Raise", group: "Shoulders", difficulty: "Beginner", equipment: "Dumbbells", benefits: "Targets front deltoids", instructions: "Raise arms straight in front of you." },
    
    { name: "Plank", group: "Core", difficulty: "Beginner", equipment: "None", benefits: "Builds core stability", instructions: "Hold push-up position on forearms, keep body straight." },
    { name: "Leg Raise", group: "Core", difficulty: "Beginner", equipment: "None", benefits: "Targets lower abs", instructions: "Lie on back, raise straight legs until perpendicular to floor." },
    { name: "Mountain Climber", group: "Core", difficulty: "Beginner", equipment: "None", benefits: "Cardio and core burner", instructions: "From push-up position, alternate bringing knees to chest." }
  ],
  nutrition: [
    {
      category: "PROTEIN",
      description: "Supports muscle repair and growth.",
      examples: ["Eggs", "Paneer", "Dal", "Greek yogurt/curd", "Soy", "Chicken/Fish if applicable"]
    },
    {
      category: "CARBO\nHYDRATES",
      description: "Provide energy for training and daily activity.",
      examples: ["Rice", "Oats", "Roti", "Potatoes", "Fruits"]
    },
    {
      category: "HEALTHY FATS",
      description: "Important for overall health and nutrition.",
      examples: ["Nuts", "Seeds", "Peanut butter", "Avocado", "Healthy cooking oils"]
    },
    {
      category: "HYDRATION",
      description: "Drink enough fluids to support performance and recovery.",
      examples: ["Water", "Coconut water", "Electrolytes during intense sessions"]
    }
  ],
  benefits: [
    { title: "STRONGER BODY", description: "Improve muscular strength and physical capacity." },
    { title: "BETTER ENERGY", description: "Regular activity can support energy and daily function." },
    { title: "BETTER MOBILITY", description: "Training mobility and movement can help you move more comfortably." },
    { title: "BETTER SLEEP", description: "Regular physical activity may support healthy sleep." },
    { title: "MORE CONFIDENCE", description: "Progress can build confidence and discipline." },
    { title: "HEALTHIER LIFESTYLE", description: "Build sustainable habits around exercise, nutrition and recovery." }
  ],
  motivationalQuotes: [
    "Train today. Thank yourself tomorrow.",
    "Progress over perfection.",
    "Stronger every session.",
    "Your body follows what your mind commits to.",
    "Consistency beats intensity without direction."
  ]
};
