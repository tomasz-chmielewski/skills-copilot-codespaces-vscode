function skiilsMember() {
    return {
        restrict: 'E',
        templateUrl: 'app/components/member/member.html',
        controller: 'MemberController',
        controllerAs: 'vm',
        bindToController: true
    };
}