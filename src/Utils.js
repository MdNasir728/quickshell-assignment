import {
    todo,
    Backlog,
    HighPriority,
    LowPriority,
    MediumPriority,
    UrgentPrioritycolour,
    inprogress,
    Nopriority,
    UrgentPrioritygrey,
    Cancelled,
    Done

} from './icons_FEtask'


export const icons = [
    {
        type: 'Todo',
        value: todo 
    },
    {
        type: 'In progress',
        value: inprogress 
    },
    {
        type: 'Backlog',
        value: Backlog 
    },
    {
        type: 'Done',
        value: Done 
    },
    {
        type: 'Cancelled',
        value: Cancelled 
    },
    {
        type: 'Urgent',
        value: UrgentPrioritycolour 
    },
    {
        type: 'High',
        value: HighPriority 
    },
    {
        type: 'Medium',
        value: MediumPriority 
    },
    {
        type: 'Low',
        value: LowPriority 
    },
    {
        type: 'No priority',
        value: Nopriority 
    }
]

export const assignIcon = (type) => {
    const icon = icons.find((icon) => icon.type === type);
    if (icon) {
      return icon.value;
    }
};

export const priorityIcon = (priority) => {
    if (priority===0) {
        return Nopriority
    }
    if (priority===1) {
        return LowPriority
    }
    if (priority===2) {
        return MediumPriority
    }
    if (priority===3) {
        return HighPriority
    }
    if (priority===4) {
        return UrgentPrioritygrey
    }
}



export const getAvailabilityById = (taskId, allTickets, allUser ) => {
    const task = allTickets.find(task => task.id === taskId);
    const user = allUser.find(user => user.id === task?.userId);
    return  user?.available;

  };