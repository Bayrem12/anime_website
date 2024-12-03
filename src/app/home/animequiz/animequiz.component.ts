import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-animequiz',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './animequiz.component.html',
  styleUrl: './animequiz.component.css'
})
export class AnimequizComponent {
    allQuestions = [
        {
          question: "Who is the main character in Naruto?",
          options: ["Naruto", "Sasuke", "Sakura", "Kakashi"],
          answer: "Naruto"
        },
        {
          question: "What is Luffy's ultimate dream in One Piece?",
          options: ["To find the One Piece", "To be a Marine", "To become a Pirate King", "To own a shipyard"],
          answer: "To become a Pirate King"
        },
        {
          question: "In Attack on Titan, who is the Armored Titan?",
          options: ["Reiner", "Eren", "Armin", "Zeke"],
          answer: "Reiner"
        },
        {
          question: "What is the goal of Gon Freecss in Hunter x Hunter?",
          options: ["To become a Hunter", "To find his father", "To defeat Hisoka", "To learn Nen"],
          answer: "To find his father"
        },
        {
          question: "Who is the Flame Hashira in Demon Slayer?",
          options: ["Kyojuro Rengoku", "Tengen Uzui", "Sanemi Shinazugawa", "Muichiro Tokito"],
          answer: "Kyojuro Rengoku"
        },
        {
          question: "What is Light Yagami's alias in Death Note?",
          options: ["Kira", "L", "Ryuk", "Near"],
          answer: "Kira"
        },
        {
          question: "Which anime features a notebook that can kill people?",
          options: ["Death Note", "Bleach", "Code Geass", "Parasyte"],
          answer: "Death Note"
        },
        {
          question: "What is the name of Goku’s signature move in Dragon Ball?",
          options: ["Kamehameha", "Spirit Bomb", "Final Flash", "Destructo Disc"],
          answer: "Kamehameha"
        },
        {
          question: "In My Hero Academia, what is Deku's real name?",
          options: ["Izuku Midoriya", "Katsuki Bakugo", "Toshinori Yagi", "Shoto Todoroki"],
          answer: "Izuku Midoriya"
        },
        {
          question: "Who is the main antagonist in Tokyo Ghoul?",
          options: ["Rize Kamishiro", "Kisho Arima", "Ken Kaneki", "Yoshimura"],
          answer: "Rize Kamishiro"
        },
        {
          question: "In Fullmetal Alchemist, what is Edward Elric’s primary goal?",
          options: ["To become a State Alchemist", "To restore his brother's body", "To defeat Father", "To learn forbidden alchemy"],
          answer: "To restore his brother's body"
        },
        {
          question: "Which organization does Itachi Uchiha belong to in Naruto?",
          options: ["Akatsuki", "Anbu", "Konoha", "Otsutsuki"],
          answer: "Akatsuki"
        },
        {
          question: "What is the name of Ichigo's sword in Bleach?",
          options: ["Zangetsu", "Benihime", "Kyoka Suigetsu", "Tensa Zangetsu"],
          answer: "Zangetsu"
        },
        {
          question: "In Sword Art Online, what is Kirito’s real name?",
          options: ["Kazuto Kirigaya", "Kirigaya Kazuto", "Asuna Yuuki", "Eugeo"],
          answer: "Kazuto Kirigaya"
        },
        {
          question: "Who is the leader of the Phantom Troupe in Hunter x Hunter?",
          options: ["Chrollo Lucilfer", "Hisoka", "Feitan", "Pakunoda"],
          answer: "Chrollo Lucilfer"
        },
        {
          question: "What is the name of the school in My Hero Academia?",
          options: ["UA High School", "Shiketsu Academy", "Totsuki Academy", "Blue Lock Academy"],
          answer: "UA High School"
        },
        {
          question: "Who is the main villain in the first season of Demon Slayer?",
          options: ["Muzan Kibutsuji", "Akaza", "Daki", "Rui"],
          answer: "Rui"
        },
        {
          question: "What is the name of the virtual world in Sword Art Online?",
          options: ["Aincrad", "Alfheim", "Underworld", "Ragnarok"],
          answer: "Aincrad"
        },
        {
          question: "What type of alchemy does Roy Mustang use in Fullmetal Alchemist?",
          options: ["Flame Alchemy", "Ice Alchemy", "Shadow Alchemy", "Blood Alchemy"],
          answer: "Flame Alchemy"
        },
        {
          question: "Which anime features the Holy Grail War?",
          options: ["Fate/Stay Night", "Black Clover", "Seven Deadly Sins", "Re:Zero"],
          answer: "Fate/Stay Night"
        },
        {
          question: "Who is the author of Attack on Titan?",
          options: ["Hajime Isayama", "Masashi Kishimoto", "Eiichiro Oda", "Tite Kubo"],
          answer: "Hajime Isayama"
        },
        {
          question: "What is the ability of Shoto Todoroki in My Hero Academia?",
          options: ["Half-Cold Half-Hot", "Explosion", "One For All", "Warp Gate"],
          answer: "Half-Cold Half-Hot"
        },
        {
          question: "Who is known as the ‘Hero of the Leaf’ in Naruto?",
          options: ["Minato Namikaze", "Naruto Uzumaki", "Hashirama Senju", "Kakashi Hatake"],
          answer: "Minato Namikaze"
        },
        {
          question: "What is the name of the Guild in Fairy Tail?",
          options: ["Fairy Tail", "Blue Pegasus", "Sabertooth", "Phantom Lord"],
          answer: "Fairy Tail"
        }
            
    ];
      questions: any[] = [];
      currentQuestionIndex = 0;
      currentQuestion: any = {};
      score = 0;
      quizEnded = false;
      wrongAnswers: any[] = [];
    
      ngOnInit(): void {
        this.startQuiz();
      }
    
      startQuiz() {
        this.questions = this.shuffle(this.allQuestions).slice(0, 4); // Pick 4 random questions
        this.currentQuestionIndex = 0;
        this.currentQuestion = this.questions[this.currentQuestionIndex];
        this.quizEnded = false;
        this.score = 0;
        this.wrongAnswers = [];
        this.closeResultsPopup(); // Ensure the modal is closed when restarting
      }
    
      answerQuestion(selectedOption: string) {
        if (selectedOption === this.currentQuestion.answer) {
          this.score++;
        } else {
          this.wrongAnswers.push({
            question: this.currentQuestion.question,
            correctAnswer: this.currentQuestion.answer
          });
        }
        this.moveToNextQuestion();
      }
    
      moveToNextQuestion() {
        this.currentQuestionIndex++;
        if (this.currentQuestionIndex < this.questions.length) {
          this.currentQuestion = this.questions[this.currentQuestionIndex];
        } else {
          this.quizEnded = true;
          this.showResultsPopup();
        }
      }
    
      shuffle(array: any[]): any[] {
        return array.sort(() => Math.random() - 0.5); // Shuffle the array
      }
    
      showResultsPopup() {
        const modal = document.getElementById("resultModal");
        if (modal) {
          modal.style.display = "block";
        }
      }
    
      closeResultsPopup() {
        const modal = document.getElementById("resultModal");
        if (modal) {
          modal.style.display = "none";
        }
      }
  
}
