namespace CalcApp {
    angular.module(`CalcApp`, []);

    class CalcController {
        public results;
        addNums(a, b){
            this.results = a + b; 
           
        }

        public subResults;
        subNums(a, b) {
            this.results = a - b;
        }

        public multResults;
        multNums(a, b) {
            this.results = a * b;
        }

        public divResults;
        divNums(a, b) {
            this.results = a / b;   
            if (a == 0 || b == 0) {
                alert(`Can not divide by ZERO`);
            } else { this.results; }
                 
        }
    }

    angular.module(`CalcApp`).controller("CalcController", CalcController);

}
